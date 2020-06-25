const {appSettings: {JOI}, regex: {TIME}} = require('../config');
const Joi = require(JOI);

module.exports = Joi.object().keys({
    id:Joi.number().integer().required(),
    theme: Joi.string().trim().min(1).optional(),
    audience: Joi.number().integer().min(1).optional(),
    start_time: Joi.string().regex(RegExp(TIME)).optional(),
    end_time: Joi.string().regex(RegExp(TIME)).optional(),
    teacher_id: Joi.number().integer().min(1).optional(),
    group_id: Joi.number().integer().min(1).optional()
});
