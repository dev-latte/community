import { ADD_STATUS, INIT_STATUS } from "./type";

export const initialStatus = {
    lv: 1,
    sp: 3,
    exp: 0,
    atk: 1,
    hp: 10,
    def: 5,
    str: 1,
    int: 1,
    dex: 1,
    luk: 1
};

const statusReducer = (state = {}, action) => {
    console.log(action, state);
    switch (action.type) {
        case ADD_STATUS:
            return {
                ...state,
                status: action.status
            }
        case INIT_STATUS:
            return {
                ...state,
                status: initialStatus
            }
        default:
            return state
    }
}

export default statusReducer;