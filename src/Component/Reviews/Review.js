import React from 'react';

const Review = (props) => {
    const { img, name, country, review, rate } = props.review
    return (
        <div className='p-4 rounded-xl text-center bg-gradient-to-r from-neutral-100 to-slate-100 shadow-xl border m-4'>
            <img src={img} alt="" className='w-30 h-40 rounded-full mx-auto shadow-2xl border-2' />
            <h1 className='font-bold divide-x'>Name: {name}</h1>
            <hr />
            <h1 className='text-bold'>{country}</h1>
            <h1 className='text-bold text-xl font-bold font-sans text-orange-900 border p-4'>"{review}"</h1>
            <h1 className='font-bold text-xl uppercase'>{rate}</h1>
        </div>
    );
};

export default Review;