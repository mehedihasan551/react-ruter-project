import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Componens/About/About';
import Contect from './Componens/About/Contect/Contect';
import Headar from './Componens/Headar/Headar';
import Home from './Componens/Home/Home';
import Friends from './Componens/Friends/Friends';
import Frist from './Componens/First/Frist';
import FriendsDetails from './Componens/Friend_details/FriendsDetails';


// const routar = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/about',
//     element:<About></About>
//   },
//   {
//     path:'/contact',
//     element:<Contect></Contect>
    
//   }
// ])
const routar = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      
      {
        path:'/',
        element:<Frist></Frist>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendsDetails></FriendsDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contect></Contect>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Headar></Headar> */}
    <RouterProvider router={routar}></RouterProvider>
  </React.StrictMode>,
)
