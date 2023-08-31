module.exports = (app, router) => {
    const performance = require('../controllers/performance.controller')

    router.get('/year/:year', performance.findByYear)

    app.use('/api/performance', router)
}