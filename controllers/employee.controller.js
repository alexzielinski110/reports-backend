const db = require('../models')

const Employee = db.employee

exports.findAll = (req, res) => {
    Employee.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some errors have occurred when retrieving the employees'
        })
    })
}