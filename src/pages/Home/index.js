import image2 from '../../images/hero-image.png'
import './home.scss'
import { TbFileSearch } from "react-icons/tb";
import { getTagorCity } from '../../services/tagServices';
import {
    Button,
    Cascader,
    Col,
    Form,
    Row
} from 'antd';
import { getCookie } from "../../help/cookie"
import { useEffect, useState } from 'react';
import { getToken } from '../../services/userSevices';

const Home = () => {
    const tag = [
        { label: 'HTML', value: 'HTML' },
        { label: 'CSS', value: 'CSS' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'Database', value: 'Database' },
        { label: 'JSON', value: 'JSON' },
        { label: 'PHP', value: 'PHP' },
        { label: 'Python', value: 'Python' },
        { label: 'Java', value: 'Java' },
        { label: 'SQL', value: 'SQL' },
        { label: 'Angular', value: 'Angular' },
        { label: 'NodeJS', value: 'NodeJS' },
        { label: 'ReactJS', value: 'ReactJS' },
        { label: 'VueJS', value: 'VueJS' },
        { label: 'Django', value: 'Django' },
        { label: 'JQuery', value: 'JQuery' },
        { label: 'TypeScript', value: 'TypeScript' }
    ]
    const city = [
    {
        label: "Hà Nội",
        value: "Hà Nội"
    },
    {
        label: "Hồ Chí Minh",
        value: "Hồ Chí Minh"
    },
    {
        label: "Đà Nẵng",
        value: "Đà Nẵng"
    }
];

    const [company,setCompany] = useState([])
    const checkToken= async()=>{
        const token = getCookie("token");
        if(token){
            const companyToken = await getToken(token)
            setCompany(companyToken);
        }
    }
    // const getData = async ()=>{
    //     const tagData = await getTagorCity("tags");
    //     const cityData = await getTagorCity("city");
    //     tagData.forEach(e => {
    //         tag.push({
    //             label:`${e.value}`,
    //             value:`${e.value}`
    //         })
    //     });
    //     cityData.forEach(e => {
    //         city.push({
    //             label:e.value,
    //             value:e.value,
    //         })
    //     });
    // }
    useEffect(()=>{
        // getData();
        checkToken();
    },[])
    
    const onFinish = (e) => {
        console.log(e.search);
        console.log(e.tags);
        console.log(e.city);
    }
    return (
        <>
            <section className="home">
                <div className="home__shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 898.595 671.33">
                        <g data-name="Group 1168">
                            <path data-name="Path 1352" d="M77.225.84S65.754 56.25 72.99 108.615c6.519 47.174 14.071 83.313 45.359 132.19s67.663 74.2 113.344 90.467c10.087 2.544 22.468 4.651 35.375 10.446 17.912 8.956 39.851 18.784 63.185 64.959 29.724 58.823 31.289 129.222 102.94 193.364 30.523 27.324 85.56 48.346 152.718 60.609 90.568 16.538 203.528 16.044 311.709-17.053 0-46.584-.016-642.734-.016-642.734z" fill="#ffecee"></path>
                            <path data-name="Path 1353" d="M4.946.863s-11.953 71.78 4.545 135.746 50.072 127.642 106.223 162.953c30.391 18.524 54.077 22.62 54.077 22.62s35.965 6.587 58.362 28.851 33.95 47.335 40.287 63.6 30.656 87.859 39.048 101.217 22.093 51.037 70.9 84.776 130.668 56.964 257.731 60.438 240.329-44.6 261.458-55.888" fill="none" stroke="#273437" stroke-strokelinecap="round" stroke-strokelidth="1.5"></path>
                        </g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.025 234.723">
                        <g data-name="Group 1169">
                            <path data-name="Path 1351" d="M246.353.908s32.245 23.839 14.178 60.475-62.607 44.54-85.191 84.439-37.268 86.821-83.942 85.186c-36.9-1.289-90.335-44.54-90.335-44.54L1.188.657z" fill="#ffecee"></path>
                            <path data-name="Path 1350" d="M178.777.908s4.869 19.639 32.623 49.99 37.492 50.964 33.6 76.932-38.147 51.938-67.684 70.765-58.263 37.33-101.763 35.22c-40.1-1.945-59.9-27.777-71.327-57.935-.862-2.273-1.961-6.034-3.171-6.986" fill="none" stroke="#273437" stroke-strokelinecap="round" stroke-strokewidth="1.5"></path>
                        </g>
                    </svg>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="home__content">
                                <span className="home__content__subtitle">coder</span>
                                <h1 className="home__content__title">{company.length>0?company[0].companyName:"Nâng tầm sự nghiệp của bạn"}</h1>
                                {company.length>0?<><p className="home__content__desc">Email: {company[0].email}</p><p className="home__content__desc">Phone: {company[0].phone}</p></>:<p className="home__content__desc">Aspho - nơi kết nối các nhà tuyển dụng và nhà phát triển hàng đầu Việt Nam</p>}
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="home__image">
                                <img src={image2} alt="home image" />
                            </div>
                        </div>
                    </div>
                    {/* <form>
                        <div className='row align-items-center'>
                            <div className='col-lg-6'>
                                <div className="home__search">
                                    <input type="text" id='home__search' placeholder='search your job' />
                                    <label htmlFor='home__search'><TbFileSearch className='icon__search' /></label>
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                <div className="home__search">
                                    <input id='home__tag' placeholder='Tags' />
                                    <label htmlFor='home__tag'><FaChevronDown className='icon__search' /></label>
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                <div className="home__search">
                                    <input id='home__city' placeholder='City' />
                                    <label htmlFor='home__city'><FaChevronDown className='icon__search' /></label>
                                </div>
                            </div>
                        </div>
                    </form> */}
                    {company.length>0?<></>:
                    <Form
                        onFinish={onFinish}>
                        <Row>
                            <Col span={19}>
                                <Form.Item name="search">
                                    <div className="home__search">
                                        <input type="text" id='home__search' placeholder='search your job' autoComplete='on'/>
                                        <label htmlFor='home__search'><TbFileSearch className='icon__search' /></label>
                                    </div>
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <div className="home__search">
                                    <Form.Item name="city">
                                        <Cascader
                                            options={city}
                                            maxTagCount="responsive"
                                            placeholder="City"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={21}>
                                <div className="home__search">
                                    <Form.Item name="tags">
                                        <Cascader
                                            options={tag}
                                            multiple
                                            maxTagCount="responsive"
                                            placeholder="Tags"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={3}>
                                <Form.Item>
                                    <div className="home__search">
                                        <Button htmlType="submit">Search</Button>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    }
                    
                </div>
            </section>
        </>
    )
}
export default Home;