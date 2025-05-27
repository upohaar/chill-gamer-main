import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../../Components/AllReviewCard/AllReviewCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllReviews = () => {
  const data = useLoaderData();
  const { theme } = useContext(AuthContext);
  const [reviews, setReviews]= useState([...data])

  const handelSort =(value)=>{
        fetch(`https://chill-gamer-server.onrender.com/review?sort=${value}`)
        .then(res => res.json())
        .then(data => 
            setReviews(data)
        )
  }

  return (
    <div className={`py-10 ${theme == "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="my-10">
        <div className="w-11/12 mx-auto ">
          <div className="flex justify-between">
            <h1
              className={`text-center font-bold md:text-4xl text-2xl mb-10 ${
                theme == "light" ? "text-black" : "text-white"
              }`}
            >
              Best Games by Rating
            </h1>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
               Sort By
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a onClick={ ()=>handelSort("rating")}>Rating</a>
                </li>
                <li>
                  <a onClick={()=>handelSort("year")}>year</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <AllReviewCard key={review._id} review={review}></AllReviewCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
