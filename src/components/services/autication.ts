import { ILogin } from "components/login/LoginTypes"
import axios from 'axios'
const url = "https://retoolapi.dev/29qJQC/data"
export const postLogin = async(data:ILogin)=>{
    await axios.post(url,data)
}