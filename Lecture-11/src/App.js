import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import PageNotFound from "./components/PageNotFound"
import Contact from "./components/Contact"
import SingleCard from "./components/SingleCard"
import Profile from "./components/ProfileClass"
import ShimmerUICard from "./components/ShimmerUICard"
import UserContext from "./utils/UserContext"

const Instamart = lazy(() => import("./components/Instamart"))

const [user, setUser] = useState({
    name: "rahul",
    email: "rahul@gmail.com"
})

const AppLayout = () => {
    return (
        <UserContext.Provider value={{ user: user }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
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
        element: <About />,
        children: [{
            path: "profile",
            element: <Profile />
        }]
    }, {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/restaurant/:id",
        element: <SingleCard />
    },
    {
        path: "/instamart",
        element: <Suspense fallback={<ShimmerUICard />} ><Instamart /></Suspense>
    }]
}])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)