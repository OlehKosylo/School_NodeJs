const {db: {GROUP_ID}, modelsName: {STUDENT}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(STUDENT, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },

            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            tableName: STUDENT,
            timestamps: false
        });

    Student.associate = function (models) {
        Student.belongsTo(models.Group, {
            foreignKey: GROUP_ID
        });
    };

    return Student;
};
