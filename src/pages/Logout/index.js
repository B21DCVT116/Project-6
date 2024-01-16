import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authen } from "../../action/authen";
import { deleteAllCookies } from "../../help/cookie";

const Logout = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        deleteAllCookies();
        dispatch(authen(false));
        navigate("/")
    }, [])
    
    return(
        <></>
    )
}
export default Logout;