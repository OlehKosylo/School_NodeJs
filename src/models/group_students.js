const {db: {STUDENT_ID, GROUP_ID}, modelsName: {LESSON, GROUP_STUDENT}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const group_students = sequelize.define(GROUP_STUDENT, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            student_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        },
        {
            tableName: LESSON,
            timestamps: false
        });

    group_students.associate = function (models) {
        group_students.belongsTo(models.Student, {
            foreignKey: STUDENT_ID
        });

        group_students.belongsTo(models.Group, {
            foreignKey: GROUP_ID
        });
    };


    return group_students;
};
