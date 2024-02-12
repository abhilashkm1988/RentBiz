import { Outlet } from "react-router-dom";
import TopNavBar from '../../components/shared/TopNavBar';
import SideNav from '../../components/shared/SideNav';
import Footer from '../../components/shared/Footer';
const Layout = () => {
    return (
        <div className="wrapper">
            <TopNavBar />
            <SideNav />
            <section className="content-wrapper">
                <div className="content">
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Layout;