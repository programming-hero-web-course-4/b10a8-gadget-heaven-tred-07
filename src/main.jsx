import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Order from './Components/Orders.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=>fetch('/data.json')
      },
      {
        path:"dasboard",
        element: <Dashboard></Dashboard>
      },
      {
        path:"order",
        element: <Order></Order>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
