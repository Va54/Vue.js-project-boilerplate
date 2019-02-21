# Vue Boilerplate


##Project structure
```
boilerplate/
    node_modules/
    public/ (files that are copied to distribution folder during build)
    src/
        assets/
             images
             styles/
                /components (styles for separate components)
                /layout (layout stylesheets e.g. header, footer etc.)
                /utils (stylesheets for variables, fonts, mixins etc.)
        components/ 
            layout/ (layout components e.g. header, footer etc.)
            ui/ (reusable components across the whole app)
            common/ (uncategorised components)
            sections/
        mixins/ (Vue component mixins)  
        router/ (vue-router definition)  
        services/
            helpers/ (support files and code)
            store/ (VueX core parts(actions, getters, mutations, state))
        views/(components that are routed)    
        App.vue 
        constants.js
        main.js (host page for Vue app)
    tests/
        e2e/
            plugins/
            specs/
            support/
        unit/    
    .browserslintrc
    .env (project environment variables)
    .eslintrc.js (EsLint rules file)
    .gitignore
    .postcssrc.js
    babel.config.js (babel rules file)
    cypress.env.json (environment variables for cypess on test run)
    cypress.json (Cypress configuration file for supplying any of the configuration options)
    jest.config.js
    package.json
    pakcage-lock.json
    README.md
    vue.config.js (optional config file automatically loaded by @vue/cli-service for webpack configuration)
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minfies for production in modern mode
```
npm run build:modern
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
