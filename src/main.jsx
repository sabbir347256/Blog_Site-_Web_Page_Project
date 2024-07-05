import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Pages/Root/Root';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SignIn from './Components/Pages/Signin and register/SignIn';
import AuthContext from './Components/Authprovider/AuthContext';
import Dashboard from './Components/Pages/DashBoard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Addpost from './Components/Pages/DashBoard/AddPost/Addpost';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashBoardHome from './Components/Pages/DashBoard/DashBoardHome';
import ShowDetails from './Components/Pages/Home/AllBlogPost/ShowDetails';
import UserProfile from './Components/Pages/DashBoard/UserProfile/UserProfile';
import ContactSms from './Components/Pages/DashBoard/AddPost/ContactSms/ContactSms';
import Register from './Components/Pages/Signin and register/Register';
import ManageUser from './Components/Pages/DashBoard/ManageUser/ManageUser';
import Allmypost from './Components/Pages/DashBoard/AllMyPost/Allmypost';
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();
// ..
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/viewdetails/:id',
        element: <ShowDetails></ShowDetails>,
        loader: () => fetch('https://blog-web-server-site.vercel.app/allBlog')
      }
    ],
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashBoardHome></DashBoardHome>
      },
      {
        path: 'adminprofile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'addpost',
        element: <Addpost></Addpost>
      },
      {
        path: 'allpost',
        element: <Allmypost></Allmypost>
      },
      {
        path: 'contactSms',
        element: <ContactSms></ContactSms>
      },
      {
        path: 'manageuser',
        element: <ManageUser></ManageUser>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </React.StrictMode>
    </QueryClientProvider>
  </HelmetProvider>
)
