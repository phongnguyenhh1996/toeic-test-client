import * as TYPES from "../constants";


const initialState = {
    listTest: [

    ],
}

const listAllTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LIST_ALL_TEST_REQUEST:
            return state;
        case TYPES.LIST_ALL_TEST_SUCCESS:
            return {
                ...state,
                listTest: action.payload
            };
        case TYPES.LIST_ALL_TEST_FAILED:
            return state;
        default:
            return state;
    }
}
export default listAllTestReducer;