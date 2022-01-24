const SET_USER = 'userObj/SET';

export const set = (userObj) => ({ 
                                    type: SET_USER, 
                                    userObj
                                });

const initialState = {
    displayName: 'noUser',
    photoURL: '',
    screenName: '',
    uid: '',
    securityLevel: 3,
};

const userOBj = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userObj: action.userObj
            }
        default:
            return state
    }
}

export default userOBj;