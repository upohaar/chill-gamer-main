

const WatchListTable = ({reviews,index}) => {
    const{ review,email,userName}=reviews
    return (     
             <tbody>
            {/* row 1 */}
            <tr>
              <th>
                {index+1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={review.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                   
                  </div>
                </div>
              </td>
              <td>
               {review.rating}
                <br />
              
              </td>
              <td>{review.genres}</td>
              <th>
                <button className="btn btn-ghost btn-xs">{review.year}</button>
              </th>
            </tr>
          </tbody>
      
    );
};

export default WatchListTable;