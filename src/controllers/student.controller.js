const {studentService: {createStudent}} = require('../db/services');
const {statusCode} = require('../config');

module.exports = {
    createStudent: async (req, res, next) => {
        try {
            await createStudent(req.body);

            res.sendStatus(statusCode.CREATED);
        } catch (e) {
            next(e)
        }
    }
};
