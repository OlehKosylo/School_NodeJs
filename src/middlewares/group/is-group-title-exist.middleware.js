const {ErrorHandler, statusesError: {TITLE_IS_ALREADY_EXIST}} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {groupService} = require('../../db/services');

module.exports = async (req, res, next) => {
    const {title} = req.body;

    const group = await groupService.getGroupByTitle(title);

    if (group) {
        return next(new ErrorHandler(TITLE_IS_ALREADY_EXIST.message, BAD_REQUEST, TITLE_IS_ALREADY_EXIST.code));
    }

    next();
};
