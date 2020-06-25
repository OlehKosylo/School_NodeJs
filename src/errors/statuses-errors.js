const {
    statuses: {
        PASSPORT_ALREADY_EXIST,
        TITLE_IS_ALREADY_EXIST,
        GROUP_ID_NOT_FOUND
    }
} = require('../config');

module.exports = {
    // bad request
    PASSPORT_ALREADY_EXIST: {
        message: PASSPORT_ALREADY_EXIST,
        code: 4002
    },

    TITLE_IS_ALREADY_EXIST: {
        message: TITLE_IS_ALREADY_EXIST,
        code: 4002
    },

    // not found
    GROUP_ID_NOT_FOUND: {
        message: GROUP_ID_NOT_FOUND,
        code: 4041
    }
};
