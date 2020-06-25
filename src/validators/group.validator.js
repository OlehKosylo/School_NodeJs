const {appSettings: {JOI}} = require('../config');
const Joi = require(JOI);

module.exports = Joi.object().keys({
    title: Joi.string().trim().min(1).required(),
});
