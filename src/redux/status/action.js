import { ADD_STATUS, INIT_STATUS, REMOVE_STATUS } from "./type"

export const addStatus = (status) => {
    return {
        type: ADD_STATUS,
        status
    }
}

export const initStatus = (initStatus) => {
    return {
        type: INIT_STATUS,
        initStatus
    }
}

export const removeStatus = (initStatus) => {
    return {
        type: REMOVE_STATUS,
        initStatus
    }
}