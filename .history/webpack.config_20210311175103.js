const targetUrl = 'http://localhost:3000/'
module.exports = {
    proxy: {
        '/api-test': {
            target: targetUrl,
            changeOrigin: true,
            logLevel: 'debug',
          }
    }
}