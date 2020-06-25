const {groupService: {createGroup}} = require('../db/services');
const {statusCode} = require('../config');

module.exports = {
    createGroup: async (req, res, next) => {
        try {
            await createGroup(req.body);

            res.sendStatus(statusCode.CREATED);
        } catch (e) {
            next(e)
        }
    }
};
