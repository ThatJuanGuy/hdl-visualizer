const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/draw', // replace with your endpoint
        { target: 'http://localhost:5000' } // replace with your target
    ));
}