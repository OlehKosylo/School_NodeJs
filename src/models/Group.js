const {modelsName: {GROUP}} = require('../config');

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define(GROUP, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            tableName: GROUP,
            timestamps: false
        });

    Group.associate = function (models) {
        Group.hasMany(models.Student);
        Group.hasMany(models.Lesson);
    };

    return Group;
};
