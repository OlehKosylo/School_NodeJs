const {ErrorHandler, statusesError: {ID_NOT_FOUND, LESSON_ID_NOT_FOUND}} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {lessonService} = require('../../db/services');

module.exports = async (req, res, next) => {
    let id = null;

    if (req.query.id) {
        id = req.query.id;
    } else if (req.body.id) {
        id = req.body.id
    }

    if (!id) {
        return next(new ErrorHandler(ID_NOT_FOUND.message, BAD_REQUEST, ID_NOT_FOUND.code));
    }

    const lesson = await lessonService.getLessonById(id);

    if (!lesson) {
        return next(new ErrorHandler(LESSON_ID_NOT_FOUND.message, BAD_REQUEST, LESSON_ID_NOT_FOUND.code));
    }

    req.lesson = lesson;

    next();
};
