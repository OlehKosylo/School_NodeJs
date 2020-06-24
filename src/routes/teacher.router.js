const {appSettings} = require('../config');

const {Router} = require(appSettings.EXPRESS);
const {teacherController} = require('../controllers');
const {teacherMiddleware: {isTeacherPassportExist, isTeacherValid}} = require('../middlewares');

const teacherRouter = Router();

teacherRouter.post('/', isTeacherValid, isTeacherPassportExist, teacherController.createTeacher);

module.exports = teacherRouter;
