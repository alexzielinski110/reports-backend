module.exports = (app, router) => {
    const employee = require('../controllers/employee.controller')

    router.get('/', employee.findAll)

    app.use('/api/employee', router)
}