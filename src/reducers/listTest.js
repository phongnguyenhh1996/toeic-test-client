import * as TYPES from "../constants";


const initialState = {
    loading: false,
}

const listTest = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LIST_ALL_TEST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case TYPES.LIST_ALL_TEST_SUCCESS:
            return {
                ...state,
                [action.typeList]: action.payload,
                loading: false
            };
        case TYPES.LIST_ALL_TEST_FAILED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
export default listTest;