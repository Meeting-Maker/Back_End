const TestController = require('./controllers/TestController')

module.exports = (app) => {
   app.get('/test', TestController.hello);
}