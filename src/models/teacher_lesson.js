const {db: {TEACHER_ID, GROUP_ID}, modelsName: {LESSON, TEACHER_LESSON}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const teacher_lesson = sequelize.define(TEACHER_LESSON, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            lesson_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        },
        {
            tableName: LESSON,
            timestamps: false
        });

    teacher_lesson.associate = function (models) {
        teacher_lesson.belongsTo(models.Teacher, {
            foreignKey: TEACHER_ID
        });

        teacher_lesson.belongsTo(models.Group, {
            foreignKey: GROUP_ID
        });
    };


    return teacher_lesson;
};
