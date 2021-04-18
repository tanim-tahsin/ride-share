import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
const [userReviews,setUserReviews] = useState([])

    useEffect(() => {
      fetch('https://immense-beyond-89177.herokuapp.com/reviews')
      .then(res =>res.json())
      .then(data=>setUserReviews(data))

    },[])
    console.log(userReviews);
    return (
        <div  className=" mt-5 mb-2 row justify-content-center">
            <h2 className='text-center text-dark'>Testimonials</h2>
            {
                userReviews.map(userReview=> <Testimonial userReview={userReview}/>)
            }
        </div>
    );
};

export default Testimonials;