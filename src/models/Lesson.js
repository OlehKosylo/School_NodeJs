const {db: {TEACHER_ID, GROUP_ID}, modelsName: {LESSON}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const Lesson = sequelize.define(LESSON, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            theme: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            audience: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            start_time: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            end_time: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: LESSON,
            timestamps: false
        });

    Lesson.associate = function (models) {
        Lesson.hasOne(models.Teacher, {
            foreignKey: TEACHER_ID,
        });
        Lesson.hasOne(models.Group, {
            foreignKey: GROUP_ID,
        });
    };


    return Lesson;
};
