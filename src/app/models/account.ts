export interface ILoginForm{
    namelogin: string,
    password : string
}

export interface IResponseLogin{
    success : boolean,
    token : string,
    email: string,
    username : string
}

export interface IUser{
    _id : string
    username : string
    email : string
    namelogin: string
    password: string

}

export interface IResponseUser{
  success: boolean
  user : IUser
}
export interface INewUser{
    username : string
    email : string
    namelogin: string
    password: string
}
export interface IResponseNewUser {
    success : boolean
    token : string
    message : string
}