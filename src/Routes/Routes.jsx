import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>hello world</div>
    },
    {
        path: 'donation',
        element: <div>donation</div>
    },
    {
        path: '/statistic',
        element: <div>i am from statistic</div>
    }
])

export default router