const webpack = require('webpack');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(a?png|png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => options);
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 250000,
      },
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/styles/utils/_variables.scss";
        @import "@/assets/styles/utils/_mixins.scss";
        @import "@/assets/styles/utils/_buttons.scss";
        @import "@/assets/styles/utils/_baseInput.scss";
        @import "@/assets/styles/utils/_baseCheckbox.scss";
        @import "@/assets/styles/utils/_baseDropdown.scss";
        `,
      },
    },
  },
  lintOnSave: false,
};

