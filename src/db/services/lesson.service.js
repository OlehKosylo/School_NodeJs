const db = require('..').getInstance();
const {modelsName: {LESSON}} = require('../../config');

module.exports = {
    getLessonById: (id) => {
        const LessonModel = db.getModel(LESSON);

        return LessonModel.findOne({
            where: {id},
            raw: true,
            nest: true
        })
    },

    getAllLessons: () => {
        const LessonModel = db.getModel(LESSON);

        return LessonModel.findAll({
            raw: true,
            nest: true
        })
    },

    createLesson: async (lesson) => {
        const LessonModel = db.getModel(LESSON);

        await LessonModel.create(lesson);
    },

    updateLesson: async (lesson) => {
        const LessonModel = db.getModel(LESSON);

        await LessonModel.update(
            {...lesson},
            {where: {id: lesson.id}}
        );
    },

    deleteLesson: async (lesson) => {
        const LessonModel = db.getModel(LESSON);

        await LessonModel.destroy(
            {where: {id: lesson.id}}
        )
    }
};
