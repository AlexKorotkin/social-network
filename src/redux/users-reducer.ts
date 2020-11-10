

type FollowACType = { type: 'FOLLOW', usersId: number }
type UnFollowACType = { type: 'UNFOLLOW', usersId: number }
type UsersACType = {
    type: 'SET_USERS'
    users: any

}

type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
type UsersType = {
    users: Array<UserType>
}
let initialState: UsersType = {
    users: [
        {
            id: new Date().getTime(),
            photoUrl:'https://avatars.mds.yandex.net/get-zen_doc/1584427/pub_5e11039b8f011100ad298eed_5e1106265d6c4b00af467849/scale_1200',
            followed: false,
            fullName: 'Alex',
            status: 'I am a boss',
            location: {city: "Mogilev", country: 'Belarus'}
        },
        {
            id: new Date().getTime(),
            photoUrl:'https://avatars.mds.yandex.net/get-zen_doc/1584427/pub_5e11039b8f011100ad298eed_5e1106265d6c4b00af467849/scale_1200',
            followed: false,
            fullName: 'Bob',
            status: 'I am a boss too',
            location: {city: "Minsk", country: 'Russia'}
        },
        {
            id: new Date().getTime(),
            photoUrl:'https://avatars.mds.yandex.net/get-zen_doc/1584427/pub_5e11039b8f011100ad298eed_5e1106265d6c4b00af467849/scale_1200',
            followed: false,
            fullName: 'Mike',
            status: 'I am a boss too',
            location: {city: "Moscow", country: 'Russia'}
        }
    ],
}

export const usersReducer = (state: UsersType = initialState, action: any) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}  //склейка двух массивов
        default:
            return state;

    }
}


export let followAC = (usersId: number): FollowACType => ({type: 'FOLLOW', usersId: usersId})
export let setUsersAC = (): UsersACType => ({type: 'SET_USERS'})
export let unFollowAC = (usersId: number): UnFollowACType => {
    return {type: 'UNFOLLOW', usersId: usersId}
}