import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AllReviewCard = ({review}) => {
    const{_id, photo,name,description,year,genres,rating,email,userName}=review
    return (
        <div>
             <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full h-[250px] object-cover"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p className="text-gray-400">{description}</p>
          <div className='flex justify-between'>
            <p><Rating name="read-only" value={rating} max={10}  readOnly /></p>
            <p>{year}</p>
          </div>
          <div className="card-actions justify-end">
           <Link to={`/review/${_id}`}><button
            className="btn  text-white font-semibold bg-green-500">Explore Details</button></Link>
          
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllReviewCard;