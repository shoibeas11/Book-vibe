import Nav from "../component/Nav";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;