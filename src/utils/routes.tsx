import App from '../views/App/App'
import Country from '../views/Country/Country'
import { createBrowserRouter } from "react-router-dom"
import ErrorElement from '../views/ErrorElement/ErrorElement'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorElement/>
    },
    {
        path: "/:name",
        element: <Country/>
    }
]);