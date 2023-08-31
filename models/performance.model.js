module.exports = (sequelize, Sequelize) => {
    const Performance = sequelize.define('Performance', {
        employee_id: {
            type: Sequelize.INTEGER
        },
        year: {
            type: Sequelize.INTEGER(4)
        },
        title: {
            type: Sequelize.STRING
        },
        point: {
            type: Sequelize.DOUBLE(2, 2)
        },
        create_at: {
            type: Sequelize.DATE
        },
        update_at: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'tbl_performance',
        timestamps: false
    })

    return Performance
}