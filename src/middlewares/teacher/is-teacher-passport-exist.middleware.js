const {ErrorHandler, statusesError: {PASSPORT_ALREADY_EXIST}} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {teacherService} = require('../../db/services');

module.exports = async (req, res, next) => {
    const {passport} = req.body;

    const teacher = await teacherService.getTeacherByPassport(passport);

    if (teacher) {
        return next(new ErrorHandler(PASSPORT_ALREADY_EXIST.message, BAD_REQUEST, PASSPORT_ALREADY_EXIST.code));
    }

    next();
};
