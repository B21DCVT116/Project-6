import LayoutDefault from "../component/layoutDefault"
import Login from "../pages/Login";
import Home from "../pages/Home"
import Logup from "../pages/Logup";
import Logout from "../pages/Logout";
import Private from "../component/Private";
import About from "../pages/About";
import JobCM from "../pages/JobCM";
import Dashboard from "../pages/Dashboard";
import JobDev from "../pages/JobDev";
import notFound from "../pages/NotFound";
export const router = [
    {
        path:"/",
        element:<LayoutDefault/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"logout",
                element: <Logout/>
            },
            {
                path:"logup",
                element: <Logup/>
            },
            {
                path:"search/:idCompany/:id",
                element:<JobDev/>  
            },
            {
                element:<Private/>,
                children:[
                    {
                        path:"dashboard",
                        element:<Dashboard/>,
                    },
                    {
                        path:"dashboard/job",
                        element:<JobCM/>,
                    },
                    {
                        path:"dashboard/cv",
                        element:<JobCM/>,
                    },
                    {
                        path:"dashboard/aboutus",
                        element:<About/>
                    }
                ]
            },
            {
                path:"*",
                element:<notFound/>
            }
        ]
    }
];