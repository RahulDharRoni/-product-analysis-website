import React from 'react';
import UseReviews from '../Hooks/UseReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = UseReviews();
    return (
        <div>
            <h1 className='text-center font-bold text-3xl py-9'>Reviews</h1>
            <div className='grid grid-cols-3 gap-4 m-12'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;