import { ILogin } from "components/login/LoginTypes"
import axios from 'axios'
import { IRegistration } from "components/Registration/RegistrationTypes";
import { removeRepeatPasword } from "helpers";


export const postLogin = async(data:ILogin)=>{
    const url = "https://young-citadel-44598.herokuapp.com/login"
    try {
        // await axios({
        //     method: "post",
        //     url,
        //     data,
        //     withCredentials: true
        //   })
        await axios.post(url,data, {withCredentials: true});
    } catch(e:any) {
        const {data} =  e.response
        return data
    }
}

export const postRegistration = async(data:IRegistration) => {
    const url = "https://young-citadel-44598.herokuapp.com/register";
        console.log(removeRepeatPasword(data))
    try {
      const resp =  await axios.post(url,removeRepeatPasword(data));
      return resp.data
    } catch(e:any) {
        const {data} =  e.response
        return data
    }
}

