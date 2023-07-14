import { ILogin } from "components/login/LoginTypes"
import axios from 'axios'
import { IRegistration } from "components/Registration/RegistrationTypes";
import { removeRepeatPasword } from "helpers";


export const postLogin = async(data:ILogin)=>{
    const url = "https://young-citadel-44598.herokuapp.com/login"
    try {
        const resp = await axios.post(url,data, {withCredentials: true});
        return resp
    } catch(error:any) {
        
        return await error
    }
}

export const postRegistration = async(data:IRegistration) => {
    const url = "https://young-citadel-44598.herokuapp.com/register";
    try {
      const resp =  await axios.post(url,removeRepeatPasword(data));
      return resp
    } catch(error:any) {
        return await error
    }
}

export const getprofileInfo = async() => {
    
} 

