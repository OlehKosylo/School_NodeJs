const {appSettings} = require('../config');

const {Router} = require(appSettings.EXPRESS);
const {studentController} = require('../controllers');
const {groupMiddleware: {isGroupIdExist}, studentMiddleware: {isStudentValid}} = require('../middlewares');

const studentRouter = Router();

studentRouter.post('/', isStudentValid, isGroupIdExist, studentController.createStudent);

module.exports = studentRouter;
