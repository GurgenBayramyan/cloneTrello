import { ILogin } from "components/login/LoginTypes";
import axios from "axios";
import { IRegistration } from "components/Registration/RegistrationTypes";
import { removeRepeatPasword } from "helpers";
import { basicUrl } from "types/constants";

export const postLogin = async (data: ILogin) => {
  const url = `${basicUrl}/login`;
  try {
    const resp = await axios.post(url, data, { withCredentials: true });
    return resp;
  } catch (error: any) {
    return await error;
  }
};

export const postRegistration = async (data: IRegistration) => {
  const url = `${basicUrl}/register`;
  try {
    const resp = await axios.post(url, removeRepeatPasword(data));
    return resp;
  } catch (error: any) {
    return await error;
  }
};

export const setBoard = async (boardTitle: string, bg: string) => {
  const url = `${basicUrl}/boards`;
  const resp = await axios.post(
    url,
    { name: boardTitle, background: bg },
    { withCredentials: true }
  );
  return resp.data;
};
export const getBoard = async (id: string) => {
  const url = `${basicUrl}/boards/${id}`;
  const resp = await axios.get(url, { withCredentials: true });
  return resp.data;
};
export const getAllBoards = async () => {
  const url = `${basicUrl}/boards`;
  const  resp = await axios.get(url, { withCredentials: true });
  return resp.data;
  
};

export const deleteBoard = async (id: number) => {
  const url = `${basicUrl}/boards/${id}`;
  const resp = await axios.delete(url, { withCredentials: true });
  return resp.status

};

export const setChangeBoard = async (
  id: number,
  boardTitle: string,
  bg: string
) => {
  const url = `${basicUrl}/boards/${id}`;
  const  resp  = await axios.put(
    url,
    { name: boardTitle, background: bg },
    { withCredentials: true }
  );
  return resp.data

};


