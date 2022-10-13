const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('gestao-de-cobranca/api/v1/cliente', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  )
}