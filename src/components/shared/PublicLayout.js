import { Outlet } from "react-router-dom";
const PublicLayout = () => {
    return (
        <main className="app">
            <Outlet />
        </main>
    )
}

export default PublicLayout;