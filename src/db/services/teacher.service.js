const db = require('..').getInstance();
const {modelsName: {TEACHER}} = require('../../config');

module.exports = {
    getTeacherByPassport: (passport) => {
        const TeacherModel = db.getModel(TEACHER);

        return TeacherModel.findOne({
            where: {passport},
            raw: true,
            nest: true
        })
    },

    getTeacherById: (id) => {
        const TeacherModel = db.getModel(TEACHER);

        return TeacherModel.findOne({
            where: {id},
            raw: true,
            nest: true
        })
    },

    createTeacher: async (teacher) => {
        const TeacherModel = db.getModel(TEACHER);

        await TeacherModel.create(teacher);
    }
};
