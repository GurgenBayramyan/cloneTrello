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
export enum PageLocation{
    CREATEMENU = "CreateMenu",
    CREATEBOARD = "CreateBoard"
}
export enum Menus{
    WORKSPACE = "Workspace",
    PRIVATE = "Private",
    PUBLIC = "Public"
}