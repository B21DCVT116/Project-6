import { get, patch, post } from "../utils/request"

export const getTagorCity = async (tagorcity)=>{
    const result = await get(`/${tagorcity}`);
    return result;
}