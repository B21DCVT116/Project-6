import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../help/cookie";

const Private = ()=>{
    const token = getCookie("token");
    return (
        <>
        {token ? <Outlet /> : <Navigate to="/login" /> }
        </>
    )
}
export default Private;