import { Rating } from "@mui/material";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const reviews = useLoaderData();
  const { _id, photo, name,description,year,genres,rating,email, userName} = reviews;
//   console.log(reviews);
    const {user}= useContext(AuthContext)

    const handelUserReview = () =>{
        const email = user?.email;
        const userName = user?.displayName;
        const review = reviews
        const userReview = {email,userName,review}
        console.log(userReview);

        fetch('https://chill-gamer-server.onrender.com/userReview',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId ) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user added successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
        })
    }

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="flex justify-between items-center">
            <p><Rating name="read-only" value={rating} max={10}  readOnly /></p>
            <p className="font-bold ">{genres}</p>
          </div>
          <div className="card-actions justify-end">
            
            <div onClick={handelUserReview}
             className="btn bg-green-500 hover:bg-green-600 text-white">Add to WatchList</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
