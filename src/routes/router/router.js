import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
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
                path: '/blog',
                element: <Blog />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;  