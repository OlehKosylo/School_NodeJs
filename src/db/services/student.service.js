const db = require('..').getInstance();
const {modelsName: {STUDENT}} = require('../../config');

module.exports = {
    getStudentById: (id) => {
        const StudentModel = db.getModel(STUDENT);

        return StudentModel.findOne({
            where: {id},
            raw: true,
            nest: true
        })
    },

    createStudent: async (student) => {
        const StudentModel = db.getModel(STUDENT);

        await StudentModel.create(student);
    }
};
