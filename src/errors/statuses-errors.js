const {
    statuses: {
        PASSPORT_ALREADY_EXIST,
        BAD_REQUEST,
    }
} = require('../config');

module.exports = {
    // bad request
    PASSPORT_ALREADY_EXIST: {
        message: PASSPORT_ALREADY_EXIST,
        code: 4002
    }
};
