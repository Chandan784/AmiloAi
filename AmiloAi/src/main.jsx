import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/Home",
        element:<Home/>,
      },
      {
        path:"/About",
        element:<About/>,
      },
      {
        path:"/Careers",
        element:<Careers/>,
      },
      {
        path:"/Service",
        element:<Service />,
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
  ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
