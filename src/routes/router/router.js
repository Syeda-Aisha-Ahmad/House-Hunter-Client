import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import BookedHouses from "../../pages/bookedHouses/BookedHouses";
import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import ListedHouses from "../../pages/ListedHouses/ListedHouses";
import Login from "../../pages/login/Login";
import ManageBookedHouses from "../../pages/manageBookedHouses/ManageBookedHouses";
import ManageListedHouses from "../../pages/manageListedHouses/ManageListedHouses";
import NotFound from "../../pages/notFound/NotFound";
import SignUp from "../../pages/signUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/listedHouses',
                element: <ListedHouses />
            },
            {
                path: '/dashboard/manageListedHouses',
                element: <ManageListedHouses />
            },
            {
                path: '/dashboard/bookedHouses',
                element: <BookedHouses />
            },
            {
                path: '/dashboard/ManageBookedHouses',
                element: <ManageBookedHouses />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;  