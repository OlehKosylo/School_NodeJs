const {appSettings} = require('../config');
const {Router} = require(appSettings.EXPRESS);

const {lessonController} = require('../controllers');
const {
    lessonMiddleware: {isLessonValid, isLessonUpdateValid, isLessonIdExist},
    groupMiddleware: {isGroupIdExist},
    teacherMiddleware: {isTeacherIdExist}
} = require('../middlewares');

const lessonRouter = Router();

lessonRouter.get('/', isLessonIdExist, lessonController.getLessonById);
lessonRouter.post('/', isLessonValid, isGroupIdExist, isTeacherIdExist, lessonController.createLesson);
lessonRouter.put('/', isLessonUpdateValid, isLessonIdExist, isGroupIdExist, isTeacherIdExist, lessonController.updateLesson);
lessonRouter.delete('/', isLessonIdExist, lessonController.deleteLesson);

lessonRouter.get('/all', lessonController.getAllLessons);

module.exports = lessonRouter;
