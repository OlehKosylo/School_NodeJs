const {db: {LESSON_ID, GROUP_ID}, modelsName: {LESSON, GROUP_LESSON}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const group_lesson = sequelize.define(GROUP_LESSON, {
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

            lesson_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        },
        {
            tableName: LESSON,
            timestamps: false
        });

    group_lesson.associate = function (models) {
        group_lesson.belongsTo(models.Lesson, {
            foreignKey: LESSON_ID
        });

        group_lesson.belongsTo(models.Group, {
            foreignKey: GROUP_ID
        });
    };


    return group_lesson;
};
