import axios from "axios"
import { IRegistration } from "components/Registration/RegistrationTypes"
import { ToastOptions, toast } from "react-toastify"
import { IErrorObjectForAlert } from "types"


export const removeRepeatPasword = (data:IRegistration) => {
    const filteredUserObject = Object.entries(data).filter(([key]) => {
        return key !== 'repeatPassword'
    })
   return Object.fromEntries(filteredUserObject)
    

}

export const toastDefaultValue  = () => {
  return {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }
};

export const toastOk = (text: string) => {
  toast.success(text, toastDefaultValue() as ToastOptions<{}>);
};  

export const fetchLogout = async() =>{
  const resp = await axios.post("https://young-citadel-44598.herokuapp.com/logout");
  return resp
}

export const  getUSerData = async() => {
    const resp = await axios.get("https://young-citadel-44598.herokuapp.com/user",{withCredentials:true})
    return resp.data
}

// export const errorAlertFunction = (obj:IErrorObjectForAlert)=>{
//     for(let key in obj){

//       toastError(`${key} is ${obj[key as keyof typeof obj]}`)
//     }
// }