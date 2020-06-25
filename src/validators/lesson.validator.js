const {appSettings: {JOI}, regex: {TIME}} = require('../config');
const Joi = require(JOI);

module.exports = Joi.object().keys({
    theme: Joi.string().trim().min(1).required(),
    audience: Joi.number().integer().min(1).required(),
    start_time: Joi.string().regex(RegExp(TIME)).required(),
    end_time: Joi.string().regex(RegExp(TIME)).required(),
    teacher_id: Joi.number().integer().min(1).required(),
    group_id: Joi.number().integer().min(1).required()
});
