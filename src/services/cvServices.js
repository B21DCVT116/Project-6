import { get, patch, post } from "../utils/request"
export const getCV = async (id,status)=>{
    let stringStatus="";
    if(status!==""){
        stringStatus=`&statusRead=${status}`
    }
    const result = await get(`/cv?idCompany=${id}${stringStatus}`);
    return result;
}