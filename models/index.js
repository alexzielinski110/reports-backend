require('dotenv').config()

const Sequelize = require('Sequelize')
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operationsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.employee = require('./employee.model')(sequelize, Sequelize)
db.performance = require('./performance.model')(sequelize, Sequelize)

db.employee.hasMany(db.performance, {
    foreignKey: {
        name: 'employee_id'
    }
})
db.performance.belongsTo(db.employee, {
    foreignKey: {
        name: 'employee_id'
    }
})

module.exports = db