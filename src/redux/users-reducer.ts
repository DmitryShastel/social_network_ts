export type ActionsUsersType = | FollowActionCreatorType
    | UnfollowActionCreatorType
    | SetUsersActionCreatorType

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

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export const followAC = (userId: number):FollowActionCreatorType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number): UnfollowActionCreatorType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UsersPropsType>): SetUsersActionCreatorType=> ({type: SET_USERS, users})

let initialState: UsersReducerType = {
    users: [
        /*{
            id: 1,
            followed: true,
            fullName: 'Dima',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'},
            photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/04-512.png'
        },
        {
            id: 2,
            followed: true,
            fullName: 'Denis',
            status: 'I am boss too',
            location: {city: 'Moscow', country: 'Russia'},
            photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/04-512.png'
        },
        {
            id: 3,
            followed: true,
            fullName: 'Sasha',
            status: 'I am boss too',
            location: {city: 'Kiev', country: 'Ukraine'},
            photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/04-512.png'
        }*/
    ]
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}


