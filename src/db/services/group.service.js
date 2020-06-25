const db = require('..').getInstance();
const {modelsName: {GROUP}} = require('../../config');

module.exports = {
    getGroupById: (id) => {
        const GroupModel = db.getModel(GROUP);

        return GroupModel.findOne({
            where: {id},
            raw: true,
            nest: true
        })
    },

    getGroupByTitle: (title) => {
        const GroupModel = db.getModel(GROUP);

        return GroupModel.findOne({
            where: {title},
            raw: true,
            nest: true
        })
    },

    createGroup: async (group) => {
        const GroupModel = db.getModel(GROUP);

        await GroupModel.create(group);
    }
};
