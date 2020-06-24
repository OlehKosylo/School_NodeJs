const {appSettings, statuses} = require('./config');

// Default settings require
const port = process.env.PORT || 3333;
const bodyParser = require(appSettings.BODY_PARSER);
const engines = require(appSettings.CONSOLIDATE);
const express = require(appSettings.EXPRESS);
const cors = require(appSettings.CORS);
require(appSettings.DOTENV).config();

require('./db').getInstance().setModels();
const logger = require('./logger/logger');

// Settings server
const app = express();

app.engine(appSettings.EJS, engines.ejs);
app.set(appSettings.VIEWS, './views');
app.set(appSettings.VIEW_ENGINE, appSettings.EJS);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require(appSettings.BODY_PARSER).urlencoded({
    extended: true,
}));

// Routing
const {teacherRouter} = require('./routes');
app.use('/teacher', teacherRouter);

// Handling errors
app.use('*', (err, req, res, next) => {
    let message = err.message;
    if (err.parent) {
        message = err.parent.sqlMessage;
    }

    res.status(err.status || 404)
        .json({
            message: message || statuses.PAGE_NOT_FOUND,
            code: err.customErrorCode
        })
});

// Server starter
app.listen(port, (err) => {
    if (err) {
        return console.log(appSettings.SOMETHING_BAD_HAPPENED, err)
    }
    console.log(`${appSettings.SERVER_IS_LISTENING_ON} ${port}`)
});

// Write error in logger
process.on(appSettings.UNHANDLED_REJECTION, reason => {
    logger.error(appSettings.UNHANDLED_REJECTION_HAPPENED, reason);
    process.exit(0);
});
