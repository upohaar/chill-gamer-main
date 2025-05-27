import React, { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';
import AboutUs from '../../Components/AboutUs/AboutUs';
import TopStreamers from '../../Components/TopStreamers/TopStreamers';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const HomePage = () => {
    const reviews=useLoaderData() 
    const {theme}= useContext(AuthContext)
    return (
        <div className=''>
             <Banner></Banner>
             <AboutUs></AboutUs>
            <div className={`py-10 ${ theme=="light"?"bg-white":"bg-gray-900"}`}>
                <div className='w-11/12 mx-auto '>
                    <h1 className={`text-center font-bold md:text-4xl text-2xl mb-10 ${ theme=="light"?"text-black":"text-white"}`} >Best Games by Rating</h1>
                   <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                   {
                        reviews.map(review=> <ReviewCard 
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                    }
                   </div>
                </div>
            </div>

            <TopStreamers></TopStreamers>
        </div>
    );
};

export default HomePage;


