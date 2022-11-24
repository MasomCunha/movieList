import PublicRoutes from "./PublicRoutes";
import {
    BrowserRouter,
} from "react-router-dom";


export default function Routes() {

    return (
        <BrowserRouter basename="/">
             <PublicRoutes />
        </BrowserRouter>
    )

}