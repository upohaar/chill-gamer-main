import { useLoaderData } from "react-router-dom";
import MyReviewTable from "../../Components/MyReviewTable/MyReviewTable";
import { useState } from "react";

const MyReviews = () => {
    const LoadedReviews=useLoaderData() 
    const [reviews, setReviews]=useState(LoadedReviews)

  return (
    <div className="w-11/12 mx-auto my-10">
      
        <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 table table-zebra">
          <thead class="bg-gray-100 border-b">
            <tr>
              <th class="text-left px-4 py-2 text-sm font-medium text-gray-600">
                #
              </th>
              <th class="text-left px-4 py-2 text-sm font-medium text-gray-600">
                Game Title
              </th>
              <th class="text-left px-4 py-2 text-sm font-medium text-gray-600">
                Review
              </th>
              <th class="text-left px-4 py-2 text-sm font-medium text-gray-600 ">
                Rating
              </th>
              <th class="text-left px-4 py-2 text-sm font-medium text-gray-600">
                Date Added
              </th>
              <th class="text-left px-4 py-2 text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {
        reviews.map((review,index) => <MyReviewTable
        key={review._id}
        review={review}
        reviews={reviews}
        setReviews={setReviews}
        index={index}
        ></MyReviewTable>)
      }
    </tbody>
        </table>
      </div>
       
    </div>
  );
};

export default MyReviews;
