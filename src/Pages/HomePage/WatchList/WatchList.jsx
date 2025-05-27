import { useLoaderData } from "react-router-dom";
import WatchListTable from "../../../Components/WatchListTable/WatchListTable";

const WatchList = () => {
  const Reviews = useLoaderData()
 
    console.log(Reviews);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Photo</th>
              <th>Rating</th>
              <th>Genres</th>
              <th>Year</th>
            </tr>
          </thead>
         {
          Reviews.map((reviews,index)=> <WatchListTable 
            key={reviews._id}
            reviews={reviews}
            index={index}
          ></WatchListTable>)
         }
        </table>
      </div>
    </div>
  );
};

export default WatchList;
