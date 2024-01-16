import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../../services/jobServices";

const JobDev = ()=>{
    const param = useParams();
    const [data, setData] = useState([]);
    const fetchData = async ()=>{
        const job = await getJob(param.idCompany,"",param.id);
        setData([job]);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        {data?
        <>
        </>
        :
        <></>}
        </>
    )
}
export default JobDev;