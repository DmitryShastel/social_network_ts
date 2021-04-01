export type ActionsUsersType = | FollowActionCreatorType
    | UnfollowActionCreatorType
    | SetUsersActionCreatorType
    | SetCurrentPageCreatorType
    | setTotalCountActionCreatorType

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
export type setTotalCountActionCreatorType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState: UsersReducerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state

    }
}

export const followAC = (userId: number):FollowActionCreatorType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number): UnfollowActionCreatorType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UsersPropsType>): SetUsersActionCreatorType=> ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageCreatorType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number): setTotalCountActionCreatorType => ({type: SET_TOTAL_COUNT, totalCount })

