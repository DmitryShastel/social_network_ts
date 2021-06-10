const SET_USER_DATA = 'SET_USER_DATA'

export type ActionsAuthType = setUserDataACType

export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: UserDataType
}


export type UserDataType = {
    userId: string,
    email: string,
    login: string,
}


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state= initialState, action: ActionsAuthType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
}

export const setAuthUserDataAC: any = (userId: string, email: string, login: string): setUserDataACType => {
    return {type: SET_USER_DATA,
        data: {userId, email, login},
    }
}


