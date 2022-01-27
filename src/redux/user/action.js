import { ADD_USER, REMOVE_USER } from "./type"

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const removeUser = (initUser) => {
    return {
        type: REMOVE_USER,
        initUser
    }
}
