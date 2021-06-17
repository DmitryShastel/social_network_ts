export type ActionsUsersType = | FollowActionCreatorType
    | UnfollowActionCreatorType
    | SetUsersActionCreatorType
    | SetCurrentPageCreatorType
    | SetTotalCountActionCreatorType
    | ToggleIsFeatcingActionCreatorType

export type UsersPropsType = {
    userPhoto: string
    //photoUrl: string
    id: number
    followed: boolean
    fullName: string
    status: string
    name: string
    location: {city: string, country: string}
    photos: {
        small: string,
        //large: string
    }
}
export type UsersReducerType = {
    users: Array<UsersPropsType>
    pageSize: number   ////????
    totalUsersCount: number   ////????
    currentPage: number //???
    isFetching: boolean
}
export type FollowActionCreatorType = {
    type: 'FOLLOW',
    userId: number
}
export type UnfollowActionCreatorType = {
    type: 'UNFOLLOW',
    userId: number
}
export type SetUsersActionCreatorType = {
    type: 'SET-USERS',
    users: Array<UsersPropsType>
}
export type SetCurrentPageCreatorType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type SetTotalCountActionCreatorType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}
export type ToggleIsFeatcingActionCreatorType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState: UsersReducerType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
}

export const usersReducer = (state: UsersReducerType = initialState, action: ActionsUsersType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users:action.users
            }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state

    }
}

export const follow = (userId: number):FollowActionCreatorType => ({type: FOLLOW, userId});
export const unfollow = (userId: number): UnfollowActionCreatorType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<UsersPropsType>): SetUsersActionCreatorType=> ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageCreatorType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number): SetTotalCountActionCreatorType => ({type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching: boolean): ToggleIsFeatcingActionCreatorType => ({type: TOGGLE_IS_FETCHING, isFetching})
