module.exports = (app, router) => {
    const email = require('../controllers/email.controller')

    router.post('/send', email.send)

    app.use('/api/email', router)
}