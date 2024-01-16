import { BiSolidLock } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import './login.scss'
import shape01 from "../../images/feature-shape-01.svg"
import shape02 from "../../images/feature-illustration-one.png"
import shape03 from "../../images/feature-shape-02.svg"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/userSevices";
import { setCookie } from "../../help/cookie";
import { authen } from "../../action/authen";
const Login = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onSubmit = async (e) =>{
        e.preventDefault();
        const mail = e.target.elements.email.value;
        const pass = e.target.elements.password.value;
        const result = await getUser(mail,pass);
        if(result && result.length>0){
            const data = result[0];
            setCookie("id",data.id,1);
            setCookie("companyName",data.companyName,1);
            setCookie("email",data.email,1);
            setCookie("token",data.token,1);
            dispatch(authen(true))
            navigate("/");
        }else{
            alert("Email hoặc tài khoản không đúng")
        }
    }
    
    return(
        <>
        <div className="container">
            <div className="login">
                <div className="row align-items-center justify-content-between text-center">
                    <div className="col-lg-6">
                        <div className="login__images">
                            <img src={shape01} alt="feature-illustration-one"/>
                            <img src={shape02} alt="feature-illustration-one"/>
                            <img className="login-shape-02" src={shape03} alt="feature-illustration-one"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login__content">
                            <div className="login__content__form">
                                <form onSubmit={onSubmit} autoComplete="on">
                                    <h1 className="login__content__form__title">Login</h1>
                                    <div className="login__content__form__login">
                                        <input id="login__email" type="email" name="email" placeholder="Email" required />
                                        <label htmlFor="login__email"><TbMailFilled className="icon__login"/></label>
                                    </div>
                                    <div className="login__content__form__login">
                                        <input id="login__pass" type="password" name="password" placeholder="Password" required />
                                        <label htmlFor="login__pass"><BiSolidLock className="icon__login"/></label>
                                    </div>
                                    <button className="login__content__form__submit" type="submit">Login</button>
                                </form>
                                <p className="login__content__form__logup">Don't have an account?</p>
                                <Link to="/logup">Register now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Login;