const {appSettings: {JOI}} = require('../../config');
const Joi = require(JOI);

const {ErrorHandler} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {teacherModelSchema} = require('../../validators');

module.exports = async (req, res, next) => {

    const {error} = Joi.validate(req.body, teacherModelSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
