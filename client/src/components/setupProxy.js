const proxy = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://localhost:5000' }));

};





/*
const proxy = require('http-proxy-middleware');


module.exports = {
  developMiddleware: app => {
    app.use(
      "/api",
     
"proxy": {
  "/auth/google": {
    "target": "http://127.0.0.1:5000"
  }
}
    )
  },
}




"proxy": "http://localhost:5000"
module.exports = {
  developMiddleware: app => {
    app.use(
      "/api",
      proxy({
        target: "http://localhost:5000",
      })
    )
  },
}



"proxy": {
  "/auth/google": {
    "target": "http://127.0.0.1:5000"
  }
}








module.exports = {
  developMiddleware: app => {
    app.use(
      "/api",
     
"proxy": {
  "/auth/google": {
    "target": "http://127.0.0.1:5000"
  }
}
    )
  },
};

*/



