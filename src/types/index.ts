export enum RespStatus{
    request = "OK"
}
interface IErrorcase{
    message?:string
}

export interface IErrorObjectForAlert{
    age?:IErrorcase,
    email?:IErrorcase,
    firstName?:IErrorcase,
    genders?:IErrorcase,
    lastname?:IErrorcase,
    password?:IErrorcase,
    repeatPassword?:IErrorcase
    
}