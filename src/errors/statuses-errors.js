const {
    statuses: {
        ID_NOT_FOUND,
        PASSPORT_ALREADY_EXIST,
        TITLE_IS_ALREADY_EXIST,
        GROUP_ID_NOT_FOUND,
        TEACHER_ID_NOT_FOUND,
        LESSON_ID_NOT_FOUND
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
    ID_NOT_FOUND: {
        message: ID_NOT_FOUND,
        code: 4002
    },

    GROUP_ID_NOT_FOUND: {
        message: GROUP_ID_NOT_FOUND,
        code: 4041
    },

    TEACHER_ID_NOT_FOUND: {
        message: TEACHER_ID_NOT_FOUND,
        code: 4041
    },

    LESSON_ID_NOT_FOUND: {
        message: LESSON_ID_NOT_FOUND,
        code: 4041
    }
};
