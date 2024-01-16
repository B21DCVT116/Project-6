import { get, patch, post } from "../utils/request"
export const getJob = async (idCompany,status,id)=>{
    let stringStatus="";
    if(status!==""){
        stringStatus=`&status=${status}`
    }
    let idJob="";
    if(id){
        stringStatus="";
        idJob=`&id=${id}`
    }
    const result = await get(`/jobs?idCompany=${idCompany}${idJob}${stringStatus}`);
    return result;
}