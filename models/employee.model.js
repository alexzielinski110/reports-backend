module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('Employee', {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        create_at: {
            type: Sequelize.DATE
        },
        update_at: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'tbl_employee',
        timestamps: false
    })

    return Employee
}