import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Error from "../Pages/ErrorPage/Error"
import Home from "../Home/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/donation',
                element: <h1>Donation...</h1>
            },
            {
                path:'/statistic',
                element: <h1>statistic...</h1>
            },
            {
                path: '/donation-details/:id'
            }
        ]
    },
    
])

export default router