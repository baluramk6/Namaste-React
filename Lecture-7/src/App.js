import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import PageNotFound from "./components/PageNotFound"
import Contact from "./components/Contact"
import SingleCard from "./components/SingleCard"

//React Components
const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [{
        path: "/",
        element: <Body />
    }, {
        path: "/about",
        element: <About />
    }, {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/restaurant/:id",
        element: <SingleCard />
    }]
}])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)