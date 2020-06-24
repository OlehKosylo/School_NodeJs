const {modelsName: {TEACHER}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(TEACHER, {
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
        },
        {
            tableName: TEACHER,
            timestamps: false
        });

    Teacher.associate = function (models) {
        Teacher.hasMany(models.Lesson);
    };

    return Teacher;
};
