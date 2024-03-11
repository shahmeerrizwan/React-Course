import { Route, Routes } from "react-router-dom";
import DashBoard from '../Component/Views/Dashboard/index'

function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DashBoard />} />
            </Route>
        </Routes>
    )
}

export default Router;