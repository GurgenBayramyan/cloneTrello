import axios from "axios";
import { basicUrlList } from "types/constants";

export const getAllLists = async (id: string) => {
  const resp = await axios.get(
    `${basicUrlList}/${id}`,
    { withCredentials: true }
  );
  return resp.data;
};
export const createList = async (id: string, fieldName: string) => {
  const resp = await axios.post(
    basicUrlList,
    {
      boardId: id,
      name: fieldName,
    },
    { withCredentials: true }
  );
  return resp;
};
export const deleteList = async(id:string) =>{
  const url = `${basicUrlList}/${id}`;
  const resp = await axios.delete(url,{withCredentials:true});
  return resp.data
}

export const changeLists= async(id:string,body:{name:string}) =>{
  const url = `${basicUrlList}/${id}`;
  const resp = await axios.put(url,body,{withCredentials:true});
  return resp
}