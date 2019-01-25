import axios from "axios";
import tokenManager from "./tokenManager";

class Request {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      withCredentials: true,
      headers: {
        Authorization: `JWT ${tokenManager.getAuthToken()}`,
        "Content-Type": "application/json",
      },
    });

    this.multipartAxios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      withCredentials: true,
    });
  }

  send(op, data) {
    op.headers = op.headers ? op.headers : {};
    return this.axios({
      method: op.method,
      url: op.url,
      headers: Object.assign({}, op.headers, {
        Authorization: `JWT ${tokenManager.getAuthToken()}`,
        "Content-Type": "application/json",
      }),
      params: op.qs,
      data: data,
    })
      .then(res => res.data)
      .catch(err => {
        throw err.response;
      });
  }


  sendMultipartFormData(op, data) {
    op.headers = op.headers ? op.headers : {};
    return this.multipartAxios({
      method: op.method,
      url: op.url,
      headers: Object.assign({}, op.headers, {
        Authorization: `JWT ${tokenManager.getAuthToken()}`,
        mimeType: "multipart/form-data",
      }),
      params: op.qs,
      data: data,
    }).then(res => res.data);
  }

  clearAxios() {
    this.axios = undefined;
  }
}

export default new Request();
