export type LoginRequestType = {
    email: string
    password: string
}

export type LoginResponseType = LoginRequestType & {
    token: string
    isLoggedIn: boolean
}