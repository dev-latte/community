import { ADD_USER, REMOVE_USER } from "./type";

const initialUser = {
    displayName: 'GUEST',
    photoURL: '',
    screenName: '',
    uid: '',
    securityLevel: 3,
};

const userReducer = (state = {}, action) => {
    console.log(action, state);
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.user
            }
        case REMOVE_USER:
            return {
                ...state,
                user: initialUser
            }
        default:
            return state
    }
}

export default userReducer;