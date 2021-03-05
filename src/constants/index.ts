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
export const ADD_NEW_QUESTION_TO_GROUP = 'ADD_NEW_QUESTION_TO_GROUP';
export const REMOVE_QUESTION_FROM_GROUP = 'REMOVE_QUESTION_FROM_GROUP';
export const CREATE_TEST_REQUEST = 'CREATE_TEST_REQUEST';
export const CREATE_TEST_SUCCESS = 'CREATE_TEST_SUCCESS';
export const CREATE_TEST_FAILED = 'CREATE_TEST_FAILED';
export const LIST_ALL_TEST = 'LIST_ALL_TEST';
export const LIST_ALL_TEST_SUCCESS = 'LIST_ALL_TEST_SUCCESS';
export const LIST_ALL_TEST_REQUEST = 'LIST_ALL_TEST_REQUEST';
export const LIST_ALL_TEST_FAILED = 'LIST_ALL_TEST_FAILED';
export const LIST_CREATED_TEST = 'LIST_CREATED_TEST';
export const LIST_COMPLETED_TEST = 'LIST_COMPLETED_TEST';
export const GET_TEST_DETAIL_REQUEST = 'GET_TEST_DETAIL_REQUEST';
export const GET_TEST_DETAIL_SUCCESS = 'GET_TEST_DETAIL_SUCCESS';
export const GET_TEST_DETAIL_FAILED = 'GET_TEST_DETAIL_FAILED';
export const GET_LIST_TEST_HOMEPAGE_REQUEST = 'GET_LIST_TEST_HOMEPAGE_REQUEST';
export const GET_LIST_TEST_HOMEPAGE_SUCCESS = 'GET_LIST_TEST_HOMEPAGE_SUCCESS';
export const GET_LIST_TEST_HOMEPAGE_FAILED = 'GET_LIST_TEST_HOMEPAGE_FAILED';
export const POST_RESULT_REQUEST = 'POST_RESULT_REQUEST';
export const POST_RESULT_SUCCESS = 'POST_RESULT_SUCCESS';
export const POST_RESULT_FAILED = 'POST_RESULT_FAILED';

// ROUTER ACTION

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

// APP actions
export const API_UNAUTHORIZED = 'API_UNAUTHORIZED';
export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';
export const ITEM_UPLOAD_DONE = 'ITEM_UPLOAD_DONE';
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
            description: 'Look at the picture and listen to the sentences. Choose the sentence that best describes the picture:',
            partNumb: TEST_PART.PART_1,
            totalQuestion: 6,
            fromNumb: 1
        },
        [TEST_PART.PART_2]: {
            description: 'Listen to the question and the three responses. Choose the response that best answers the question:',
            partNumb: TEST_PART.PART_2,
            totalQuestion: 25,
            fromNumb: 7,
            isThreeAnswer: true
        },
        [TEST_PART.PART_3]: {
            description: 'Listen to the dialogue. Then read each question and choose the best answer:',
            partNumb: TEST_PART.PART_3,
            totalQuestion: 39,
            fromNumb: 32
        },
        [TEST_PART.PART_4]: {
            description: 'Listen to the talk. Then read each question and choose the best answer:',
            partNumb: TEST_PART.PART_4,
            totalQuestion: 30,
            fromNumb: 71,
        },
        [TEST_PART.PART_5]: {
            description: 'Choose the word that best completes the sentence:',
            partNumb: TEST_PART.PART_5,
            totalQuestion: 30,
            fromNumb: 101
        },
        [TEST_PART.PART_6]: {
            description: 'Choose the word or phrase that best completes the blanks:',
            partNumb: TEST_PART.PART_6,
            totalQuestion: 16,
            fromNumb: 131
        },
        [TEST_PART.PART_7]: {
            description: 'Read the passage and choose the correct answer:',
            partNumb: TEST_PART.PART_7,
            totalQuestion: 54,
            fromNumb: 147
        }
    }
}

export const ALPHABEL_ANSWER: {[key: number]: string} = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D'
}
