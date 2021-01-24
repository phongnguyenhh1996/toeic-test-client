// ACTION CONSTANT
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const GO_TO_QUESTION = 'GO_TO_QUESTION';
export const INIT_TEST = 'INIT_TEST';
export const CHANGE_TEST_INFO = 'CHANGE_TEST_INFO';
export const CHANGE_QUESTION_DATA = 'CHANGE_QUESTION_DATA';
export const CHANGE_ANSWER_DATA = 'CHANGE_ANSWER_DATA';
export const CHANGE_CORRECTION_DATA = 'CHANGE_CORRECTION_DATA';
//

export const TEST_TYPE = {
    FULL: 0,
    READING: 1,
    LISTENING: 2,
    PART: 3
}

export const TEST_PART = {
    PART_1: 0,
    PART_2: 1,
    PART_3: 2,
    PART_4: 3,
    PART_5: 4,
    PART_6: 5,
    PART_7: 6
}

export const TEST_TYPE_INFO = {
    [TEST_TYPE.FULL]: {
        totalQuestion: 200,
        title: 'Full test',
        fromNumb: 1,
        parts: Object.values(TEST_PART)
    },
    [TEST_TYPE.READING]: {
        totalQuestion: 100,
        title: 'Reading test',
        fromNumb: 101,
        parts: [TEST_PART.PART_5, TEST_PART.PART_6, TEST_PART.PART_7]
    },
    [TEST_TYPE.LISTENING]: {
        totalQuestion: 100,
        title: 'Listening test',
        fromNumb: 1,
        parts: [TEST_PART.PART_1, TEST_PART.PART_2, TEST_PART.PART_3, TEST_PART.PART_4]
    },
    [TEST_TYPE.PART]: {
        [TEST_PART.PART_1]: {
            partNumb: TEST_PART.PART_1,
            totalQuestion: 6,
            fromNumb: 1
        },
        [TEST_PART.PART_2]: {
            partNumb: TEST_PART.PART_2,
            totalQuestion: 25,
            fromNumb: 7,
            isThreeAnswer: true
        },
        [TEST_PART.PART_3]: {
            partNumb: TEST_PART.PART_3,
            totalQuestion: 39,
            fromNumb: 32
        },
        [TEST_PART.PART_4]: {
            partNumb: TEST_PART.PART_4,
            totalQuestion: 30,
            fromNumb: 71,
        },
        [TEST_PART.PART_5]: {
            partNumb: TEST_PART.PART_5,
            totalQuestion: 30,
            fromNumb: 101
        },
        [TEST_PART.PART_6]: {
            partNumb: TEST_PART.PART_6,
            totalQuestion: 16,
            fromNumb: 131
        },
        [TEST_PART.PART_7]: {
            partNumb: TEST_PART.PART_7,
            totalQuestion: 54,
            fromNumb: 147
        }
    }
}