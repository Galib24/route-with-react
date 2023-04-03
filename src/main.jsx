import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:  <App></App>
//   },
//   {
//     path: '/about',
//     element: <About/>
//   },
//   {
//     path: '/contact',
//     element: <Contact/>
//   },
  // {
  //   path: '/',
  //   element:<App></App>,
  //   errorElement: <Error/>
  // }
// ])
const router = createBrowserRouter ([
  {
path: '/',
element: <Home></Home>,
children: [
  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  }
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
