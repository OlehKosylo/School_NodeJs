const db = require('..').getInstance();
const {modelsName: {STUDENT}} = require('../../config');

module.exports = {
    createStudent: async (student) => {
        const StudentModel = db.getModel(STUDENT);

        await StudentModel.create(student);
    }
};
