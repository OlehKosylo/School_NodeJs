const {appSettings: {JOI}} = require('../config');
const Joi = require(JOI);

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(1).required(),
    surname: Joi.string().trim().min(1).required(),
    age: Joi.number().integer().min(18).required(),
    group_id: Joi.number().integer().required()
});
