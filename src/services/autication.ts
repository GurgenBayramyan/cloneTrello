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

export const setBoard = async (boardTitle: string,bg:string) => {
    const url = 'https://young-citadel-44598.herokuapp.com/boards';

    try {
        const { data } = await axios.post(url, { name: boardTitle,background:bg }, { withCredentials: true })

        return data;
    } catch (err: any) {
        const { data } = err.response;
        return data;
    }
}
export const getBoard = async (id: string) => {
  const url = `https://young-citadel-44598.herokuapp.com/boards/${id}`;

  try {
    const { data } = await axios.get(url,{ withCredentials: true });
    return data;
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};
export const getAllBoards = async() => {
  const url = `https://young-citadel-44598.herokuapp.com/boards`;
  try {
    const { data } = await axios.get(url,{ withCredentials: true });
    return data;
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
}

export const deleteBoard = async(id:number) => {
  const url = `https://young-citadel-44598.herokuapp.com/boards/${id}`;

  try {
    const  { status }  = await axios.delete(url,{ withCredentials: true });
    return status;
  } catch (err: any) {
    const {data} = err.response;
    return data;
  }
}
