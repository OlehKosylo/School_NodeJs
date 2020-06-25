const {ErrorHandler, statusesError: {TEACHER_ID_NOT_FOUND}} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {teacherService} = require('../../db/services');

module.exports = async (req, res, next) => {
    const {teacher_id} = req.body;

    if (teacher_id) {
        const teacher = await teacherService.getTeacherById(teacher_id);

        if (!teacher) {
            return next(new ErrorHandler(TEACHER_ID_NOT_FOUND.message, BAD_REQUEST, TEACHER_ID_NOT_FOUND.code));
        }
    }

    next();
};
