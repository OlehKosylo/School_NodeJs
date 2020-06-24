const {teacherService: {createTeacher}} = require('../db/services');
const {statusCode} = require('../config');

module.exports = {
    createTeacher: async (req, res, next) => {
        try {
            await createTeacher(req.body);

            res.sendStatus(statusCode.CREATED);
        } catch (e) {
            next(e)
        }
    }
};
