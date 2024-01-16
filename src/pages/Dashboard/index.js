import { getJob } from '../../services/jobServices';
import { getCookie } from '../../help/cookie';
import './dashboard.scss'
import {useEffect, useState} from 'react';
import { getCV } from '../../services/cvServices';
const Dashboard = () =>{
    const [data, setData] = useState([,,,]);
    const id = getCookie("id");
    useEffect(()=>{
        const fetchData = async ()=>{
            const jobTrue= await getJob(id,"true");
            const jobFalse= await getJob(id,"false");
            const cvTrue= await getCV(id,"true");
            const cvFalse= await getCV(id,"false");
            setData([jobTrue.length,jobFalse.length,cvTrue.length,cvFalse.length]);
        }
        fetchData();
    },[])
    return (
        <>
            <div className="container">
                <div className="dashboard">
                    <div className="dashboard__content">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <a href='/dashboard/job' className="dashboard__item">
                                    <strong>{data[0]+data[1]}</strong>
                                    <p>Job</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <a href='/dashboard/job' className="dashboard__item">
                                    <strong>{data[0]}</strong>
                                    <p>Job On</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <a href='/dashboard/job' className="dashboard__item">
                                    <strong>{data[1]}</strong>
                                    <p>Job Off</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard">
                    <div className="dashboard__content">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <a href='/dashboard/cv' className="dashboard__item">
                                    <strong>{data[2]+data[3]}</strong>
                                    <p>CV</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <a href='/dashboard/cv' className="dashboard__item">
                                    <strong>{data[2]}</strong>
                                    <p>CV Read</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <a href='/dashboard/cv' className="dashboard__item">
                                    <strong>{data[3]}</strong>
                                    <p>CV Haven't Read</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;