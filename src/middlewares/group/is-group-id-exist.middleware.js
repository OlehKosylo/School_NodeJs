const {ErrorHandler, statusesError: {GROUP_ID_NOT_FOUND}} = require('../../errors');
const {statusCode: {BAD_REQUEST}} = require('../../config');
const {groupService} = require('../../db/services');

module.exports = async (req, res, next) => {
    const {group_id} = req.body;

    if (group_id) {
        const group = await groupService.getGroupById(group_id);

        if (!group) {
            return next(new ErrorHandler(GROUP_ID_NOT_FOUND.message, BAD_REQUEST, GROUP_ID_NOT_FOUND.code));
        }
    }
    next();
};
