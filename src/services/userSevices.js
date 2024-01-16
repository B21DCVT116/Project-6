import { get, patch, post } from "../utils/request"

export const getUser = async (mail,pass)=>{
    let password="";
    if(pass!=="") {
        password=`&password=${pass}`
    }
    const result = await get(`/company?email=${mail}${password}`);
    return result;
}
export const getToken = async (token)=>{
    const result = await get(`/company?token=${token}`);
    return result;
}

export const postUser = async (data)=>{
    const result = await post(`/company`,data);
    return result;
}
export const patchUser = async (id,data)=>{
    const result = await patch(`/company/${id}`,data);
    return result;
}