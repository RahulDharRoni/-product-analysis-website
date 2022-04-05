import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import { Line } from 'recharts';
import UseReviews from '../Hooks/UseReviews';
import Review from '../Reviews/Review';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [reviews, setReviews] = UseReviews();
    return (
        <div className='mx-auto'>
            <section className='md:flex m-10 mx-auto'>
                <div className=' w-8/12 p-10'>
                    <h1 className='md:text-6xl text-3xl font-bold'>Next Generation WATCH!</h1>
                    <h1 className='md:text-6xl text-3xl font-bold text-yellow-500 pt-3 font-serif'>BEST WATCH IN 2030</h1>
                    <p className='pt-4'>Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. Apple released the Apple Watch on April 24, 2015.</p>
                    <button className='bg-red-400 rounded-lg px-6 py-3 mt-6 font-xl font-bold text-white'>Learn More</button>
                </div>
                <div className='flex mx-auto m-2 md:w-3/12'>
                    <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png" alt="" className='h-96 w-80' />
                </div>
            </section>
            <section>
                <h1 className='text-bold text-3xl font-bold font-sans text-orange-900 border p-4 text-center '>Customer Reviews </h1>
                <div className='grid grid-cols-1 gap-6 m-12 md:grid-cols-3'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.name} review={review}></Review>)
                    }
                </div>
            </section>
            {/* <NavLink>See More Reviewa</NavLink> */}
            <div className='px-4 py-3 bg-red-400 w-64 text-center mx-auto my-4 rounded-xl'>
                <Link to="/reviews" className='p-1 font-bold m-4 text-center text-white uppercase'>see more reviews </Link>
            </div>


        </div>
    );
};

export default HeroSection;