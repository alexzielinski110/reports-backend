module.exports = (app, router) => {
    require('./employee.routes')(app, router)
    require('./performance.routes')(app, router)
    require('./email.routes')(app, router)
}