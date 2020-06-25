const {appSettings: {JOI}} = require('../../config');
const Joi = require(JOI);

const {ErrorHandler} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {groupModelSchema} = require('../../validators');

module.exports = async (req, res, next) => {

    const {error} = Joi.validate(req.body, groupModelSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
