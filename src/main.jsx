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
import First from './Components/First page/First';
import Friends from './Components/Friends/Friends';
import FriendDetail from './Components/Friend Details/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetals/PostDetail';

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
    path: '/',
    element:<First></First>
  },
  {
path: 'friends',
element: <Friends></Friends>,
loader: () => fetch('https://jsonplaceholder.typicode.com/users')
  },
  {
path:'friend/:friendId',
element: <FriendDetail></FriendDetail>,
loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
  },
  {
path: 'posts',
element: <Posts></Posts>,
loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
  },
  {
path: 'post/:postId',
element: <PostDetail></PostDetail>,
loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  },
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
