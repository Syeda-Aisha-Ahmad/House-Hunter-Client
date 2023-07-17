import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import NotFound from "../../pages/notFound/NotFound";

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
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;  