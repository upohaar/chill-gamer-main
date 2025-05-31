import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewTable = ({ review, index, setReviews, reviews }) => {
  const {
    _id,photo,name,description,year,genres,rating,email,userName} = review;

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server.onrender.com/review/${id}`, {
          method: "DELETE"
        })
        
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "user has been deleted.",
                icon: "success"
              });
              const deleteReview = reviews.filter(review=> id !== review._id)
              setReviews(deleteReview)
            }
          });
      }
    });

    console.log(id);
  };

  return (
    
      
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
              
              <td class="px-4 py-2 text-sm text-gray-700">{name}</td>
              <td class="px-4 py-2 text-sm text-gray-700 ">{description?.slice(0,50)}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{rating}</td>
              <td class="px-4 py-2 text-sm text-gray-700 ">{year}</td>
              <td class="px-4 py-2 text-sm text-gray-700">
              <div className=" gap-4 flex ">
              <Link to={`/updateReview/${_id}`}>
               <button class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition" >
                  Update
                </button>
               </Link>
                <button
                  class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={() => handelDelete(_id)}
                >
                  Delete
                </button>
              </div>
              </td>
            </tr>
          
  );
};

export default MyReviewTable;



