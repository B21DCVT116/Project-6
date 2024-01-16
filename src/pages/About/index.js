import { useEffect, useState } from "react";
import "./about.scss";
import { getCookie } from "../../help/cookie";
import { getUser, patchUser } from "../../services/userSevices";
import shape01 from "../../images/blog-post-3.jpg"

const About = ()=>{
    const [state,setState] = useState(false);
    const [data,setData] = useState([]);
    const email = getCookie("email");
    const id = getCookie("id");
    const change = ()=>{
        setState(!state);
    }
    const fetchData= async ()=> {
        const result = await getUser(email,"");
        setData(result);
    }
    const onSubmit= async (e)=>{
        e.preventDefault();
        const newData={
            companyName: e.target.elements.companyName.value,
            phone: e.target.elements.phone.value,
            email: e.target.elements.email.value,
            quantityPeople: e.target.elements.quantityPeople.value,
            description: e.target.elements.description.value,
            detail:e.target.elements.detail.value,
            address: e.target.elements.address.value,
            workingTime: e.target.elements.workingTime.value,
            website: e.target.elements.website.value,
        }
        const result = await patchUser(id,newData);
        if(result){
            change();
        }
    }
    useEffect(() => {
        fetchData();
      }, [state]);
    
    return(
        <>
        <div className="container">
            <div className="about">
                <div className="row align-items-center text-center">
                    <div className="col-lg-6">
                        <div className="about__images">
                            <img src={shape01} alt="feature-illustration-one"/>
                        </div>
                        <div className="about__title">
                            <h1>your</h1>
                            <h1>information</h1>
                            <button onClick={change}>Change</button>
                        </div>
                    </div>
                    {state?
                    <div className="col-lg-6">
                        <div className="about__content">
                            <div className="about__content__form">
                                <form onSubmit={onSubmit}>
                                    <h1 className="about__content__form__title">About me</h1>
                                    <div className="about__content__form__about">
                                        <lable htmlFor="about__name">Company: </lable>
                                        <input id="about__name" type="text" defaultValue={data[0].companyName} name="companyName" placeholder="Company name" required />
                                    </div>
                                    <div className="about__content__form__about">
                                        <lable htmlFor="about__email">Email: </lable>
                                        <input id="about__email" type="email" name="email" defaultValue={data[0].email} placeholder="Email" required />
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__phone">Phone: </lable>
                                        <input id="about__phone" type="number" name="phone" defaultValue={data[0].phone} placeholder="Phone" />
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__address">Address: </lable>
                                        <input id="about__address" type="text" name="address" defaultValue={data[0].address?`${data[0].address}`:""} placeholder="Address" />
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__phone">Website: </lable>
                                        <input id="about__phone" type="text" name="website" defaultValue={data[0].website?`${data[0].website}`:""} placeholder="Website" />
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__workingTime">Working Time: </lable>
                                        <input id="about__workingTime" type="text" name="workingTime" defaultValue={data[0].workingTime?`${data[0].workingTime}`:""} placeholder="Working Time"/>
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__quantityPeople">Quantity People: </lable>
                                        <input id="about__quantityPeople" type="number" name="quantityPeople" defaultValue={data[0].quantityPeople?`${data[0].quantityPeople}`:""} placeholder="Quantity People" />
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__Description">Description: </lable>
                                        <textarea id="about__Description" type="text" name="description" defaultValue={data[0].description?`${data[0].description}`:""} placeholder="Description" />
                                    </div>
                                    <div class="about__content__form__about">
                                        <lable htmlFor="about__Detail">Detail: </lable>
                                        <textarea id="about__Detail" type="text" name="detail" defaultValue={data[0].detail?`${data[0].detail}`:""} placeholder="Detail" />
                                    </div>
                                    <button className="about__content__form__submit" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>:
                    <div className="col-lg-6">
                        {data && (
                            data.map(item=>(
                                <>
                                <h1 className="about__content__form__title">About me</h1>
                                <div className="about__content__form__about">
                                    <p>Company: </p>
                                    <p>{item.companyName}</p> 
                                </div>
                                <div className="about__content__form__about">
                                    <p>Email: </p>
                                    <p>{item.email}</p>
                                </div>
                                <div className="about__content__form__about">
                                    <p>Phone: </p>
                                    <p>{item.phone}</p>
                                </div>
                                <div className="about__content__form__about">
                                    <p>Address: </p>
                                    <p>{item.address?`${item.address}`:""}</p> 
                                </div>
                                <div className="about__content__form__about">
                                    <p>Website: </p>
                                    <p>{item.website?`${item.website}`:""}</p>
                                </div>
                                <div className="about__content__form__about">
                                    <p htmlFor="about__workingTime">Working Time: </p>
                                    <p>{item.workingTime?`${item.workingTime}`:""}</p> 
                                </div>
                                <div className="about__content__form__about">
                                    <p htmlFor="about__quantityPeople">Quantity People: </p>
                                    <p>{item.quantityPeople?`${item.quantityPeople}`:""}</p>
                                </div>
                                <div className="about__content__form__about">
                                    <p>Description: </p>
                                    <p>{item.description?`${item.description}`:""}</p>
                                </div>
                                <div className="about__content__form__about">
                                    <p>Detail: </p>
                                    <p>{item.detail?`${item.detail}`:""}</p>
                                </div>
                            </>
                            ))
                            )}
                    </div>
                    }
                </div>
            </div>
        </div>
            
        </>
    )

}
export default About;