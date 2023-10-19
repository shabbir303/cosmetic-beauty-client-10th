import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Pages/Root';
import Home from './Component/Pages/Home';
import AddProduct from './Component/Pages/AddProduct';
import Login from './Component/Pages/Login & Register/Login';
import Register from './Component/Pages/Login & Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
     {
       path:'/',
       element:<Home></Home>
    },
    {
      path: '/addProduct',
      element: <AddProduct></AddProduct>
    },
    {
     path:'/login',
     element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
