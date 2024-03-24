import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Root from './components/root/Root';
import Jobs from './components/job/Jobs';
import Blogs from './components/blogs/Blogs';
import JobIApplied from './components/jobIApplied/JobIApplied';
import JobDetails from './components/jobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/jobs',
        element: <Jobs></Jobs>,
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path:'/applied',
        element:<JobIApplied></JobIApplied>,
        loader:() => fetch('/jobs.json'),
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:() => fetch('../jobs.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
