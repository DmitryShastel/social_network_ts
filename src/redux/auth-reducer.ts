const SET_USER_DATA = 'SET_USER_DATA'

export type ActionsAuthType = setUserDataACType

export const setUserDataAC: any = (userId: string, email: string, login: string) => {
    return {type: SET_USER_DATA,
            data: {userId, email, login},
    }
}

export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: {
        userId: string,
        email: string,
        login: string
    }
}


export type AuthReducerType = {

}
export type InitialStateType = {
    userId: string,
    email: string,
    login: string,
}


let initialState: InitialStateType = {
    userId: '',
    email: '',
    login: '',
}

export const authReducer = (state: AuthReducerType = initialState, action: ActionsAuthType): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}


