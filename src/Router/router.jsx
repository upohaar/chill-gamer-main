import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AllReviews from "../Pages/AllReviews/AllReviews";
import AddReview from "../Pages/AddReview/AddReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import WatchList from "../Pages/HomePage/WatchList/WatchList";
import ErrorPage from "../Pages/Error/ErrorPage";
import LoginPage from "../Pages/Login/LoginPage";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import ReviewDetails from "../Pages/ReviewDetails/ReviewDetails";
import UpdateReview from "../Components/UpdateReview/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader:()=> fetch('https://chill-gamer-server.onrender.com/reviews')
      },
      {
        path: "/AllReviews",
        element: <AllReviews></AllReviews>,
        loader:()=> fetch('https://chill-gamer-server.onrender.com/review')
      },
      {
        path: "/addReview",
        element:  <PrivetRoute>
          <AddReview></AddReview>
        </PrivetRoute>
      },
      {
        path: "/myReviews",
        element: <PrivetRoute>
          <MyReviews></MyReviews>
        </PrivetRoute>,
        loader:()=> fetch('https://chill-gamer-server.onrender.com/review')
      },
      {
        path: "/WatchList",
        element: <PrivetRoute>
           <WatchList></WatchList>
        </PrivetRoute>,
       loader:()=> fetch(`https://chill-gamer-server.onrender.com/userReview`)
      },

      {
        path: "/WatchList/:email",
        element: <PrivetRoute>
           <WatchList></WatchList>
        </PrivetRoute>,
       loader:({params})=> fetch(`https://chill-gamer-server.onrender.com/userReview/${params.email}`)
      },
      {
        path:"/login",
        element:<LoginPage></LoginPage>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/review/:id",
        element:<ReviewDetails></ReviewDetails>,
        loader:({params})=> fetch(`https://chill-gamer-server.onrender.com/review/${params.id}`)
      },
      {
        path:"/updateReview/:id",
        element:<UpdateReview></UpdateReview>,
        loader:({params})=> fetch(`https://chill-gamer-server.onrender.com/review/${params.id}`)
      },
      {
        path:"*",
        element:<ErrorPage></ErrorPage>
      }
    ]
  }
]);

export default router;
