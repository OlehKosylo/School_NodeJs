const {appSettings} = require('../config');

const {Router} = require(appSettings.EXPRESS);
const {groupController} = require('../controllers');
const {groupMiddleware: {isGroupValid, isGroupTitleExist}} = require('../middlewares');

const groupRouter = Router();

groupRouter.post('/', isGroupValid, isGroupTitleExist, groupController.createGroup);

module.exports = groupRouter;
