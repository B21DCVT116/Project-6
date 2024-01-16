import { useRoutes } from "react-router-dom";
import { router } from "./index";

const AllRouter = () =>{
    const element = useRoutes(router)
    return(
        <>
        {element}
        </>
    )
}
export default AllRouter;