const db = require('../models')
const { Op } = require('sequelize')

const Performance = db.performance
const Employee = db.employee

exports.findByYear = (req, res) => {
    const query = { year: { [Op.eq]: req.params.year } }

    Performance.findAll({
        where: query,
        include: [{
            model: Employee,
            attributes: ['first_name', 'last_name', 'sex', 'age']
        }],
        attributes: [
            'employee.first_name', 'employee.last_name', 'employee.sex', 'employee.age', 'point'
        ]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some errors have occurred when retrieving the performances'
        })
    })
}