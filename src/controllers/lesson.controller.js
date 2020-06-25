const {lessonService: {createLesson, updateLesson, getAllLessons, deleteLesson}} = require('../db/services');
const {statusCode} = require('../config');

module.exports = {

    getLessonById: (req, res, next) => {
        res.json(req.lesson);
    },

    getAllLessons: async (req, res, next) => {
        res.json(await getAllLessons());
    },

    createLesson: async (req, res, next) => {
        try {
            await createLesson(req.body);

            res.sendStatus(statusCode.CREATED);
        } catch (e) {
            next(e)
        }
    },

    updateLesson: async (req, res, next) => {
        try {
            await updateLesson(req.body);

            res.sendStatus(statusCode.OK);
        } catch (e) {
            next(e)
        }
    },

    deleteLesson: async (req, res, next) => {
        try {
            await deleteLesson(req.lesson);

            res.sendStatus(statusCode.OK);
        } catch (e) {
            next(e)
        }
    },
};
