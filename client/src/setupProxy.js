const proxy = require('http-proxy-middleware');

// sets up proxy server so when receives a route appends a different domain

module.exports = function(app) {
    app.use(proxy(['/api', 'auth/google'], 
        { target: 'http://localhost:5000/' }
    ));
}

// Create setupProxy.js file in client/src/ directory. There is no need to import this file anywhere, 
// CRA (Create React App) looks for a file by this name and loads it.

// was able to eliminate the following code from index.js from the server file as well:

// **********comment CORS stuff out when in production
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');  // for CORS management
// 	next();
//   });