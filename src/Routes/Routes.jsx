import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Error from "../Pages/ErrorPage/Error"
import Home from "../Home/Home"
import DonationDetails from "../Pages/DonationDetails/DonationDetails"
import Donation from "../Pages/Donation/Donation"

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
                element: <Donation />
            },
            {
                path:'/statistic',
                element: <h1>statistic...</h1>
            },
            {
                path: '/donation-details/:id',
                element: <DonationDetails />
            }
        ]
    },
    
])

export default router