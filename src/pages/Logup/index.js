import { BiSolidLock,BiSolidRename } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import shape03 from "../../images/feature-shape-03.svg"
import shape02 from "../../images/feature-illustration-two.png"
import shape04 from "../../images/feature-shape-04.svg"
import "./logup.scss"
import { getUser, postUser } from "../../services/userSevices";
import { generateToken } from "../../help/token";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../help/cookie";
import { useDispatch } from "react-redux";
import { authen } from "../../action/authen";


const Logup = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = async (e) =>{
        e.preventDefault();
        const mail=e.target.elements.email.value;
        const name=e.target.elements.name.value;
        const pass=e.target.elements.password.value;
        const result = await getUser(mail,"")
        if(result && result.length>0){
            alert("Email đã tồn tại!")
        }else{
            const dataPost={
                companyName: name,
                phone: "",
                email: mail,
                password: pass,
                token: generateToken(),
                quantityPeople: 0,
                description: "",
                address: "",
                workingTime: "",
                website: ""
            }
            const NewData = await postUser(dataPost);
            if(NewData){
                setCookie("id",NewData.id,1);
                setCookie("email",NewData.email,1);
                setCookie("companyName",NewData.companyName,1);
                setCookie("token",NewData.token,1);
                dispatch(authen(true));
                navigate("/dashboard");

            }
        }
    }
    return(
        <>
        <div className="container">
            <div className="logup">
                <div className="row align-items-center justify-content-between text-center">
                    <div className="col-lg-6 order-2">
                        <div className="logup__images">
                            <img class="logup-shape-03" src={shape03} alt="feature-illustration-one"/>
                            <img src={shape02} alt="feature-illustration-two"/>
                            <img src={shape04} alt="feature-illustration-one"/>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1">
                        <div className="logup__content">
                            <div className="logup__content__form">
                                <form onSubmit={onSubmit}>
                                    <h1 className="logup__content__form__title">Register</h1>
                                    <div className="logup__content__form__logup">
                                        <input id="logup__name" type="text" name="name" placeholder="Name Company" required />
                                        <label htmlFor="logup__name"><BiSolidRename className="icon__logup"/></label>
                                    </div>
                                    <div className="logup__content__form__logup">
                                        <input id="logup__email" type="email" name="email" placeholder="Email" required />
                                        <label htmlFor="logup__email"><TbMailFilled className="icon__logup"/></label>
                                    </div>
                                    <div class="logup__content__form__logup">
                                        <input id="logup__pass" type="password" name="password" placeholder="Password" required />
                                        <label htmlFor="logup__pass"><BiSolidLock className="icon__logup"/></label>
                                    </div>
                                    <button className="logup__content__form__submit" type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Logup;