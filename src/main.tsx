// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


////////////////////


// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//     createBrowserRouter,
//     createRoutesFromElements,
//     Route,
//     RouterProvider,
// } from "react-router-dom";
// import App from "./App.tsx";
// import "./index.css";

// import Landing from "./pages/Landing.tsx";


// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route element={<App />}>
//             <Route path='/' element={<Landing />} />
//             {/* <Route path='/create' element={<CreateMeet />} /> */}

//         </Route>,
//     ),
// );

// ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>

//                 <RouterProvider router={router} />
                

//     </React.StrictMode>,
// );


// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import "./index.css";
import { Auth } from "./pages/Auth";

// Define your routes using the new Router API (React Router v6)
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // The main layout component
        children: [
            {
                index: true, // This will be the default route for "/"
                element: <Landing />,
            },
            {
                path: "/newmeet",
                element: <Auth />,
            },
        ],
    },
]);

// Render the application with the RouterProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>


);
