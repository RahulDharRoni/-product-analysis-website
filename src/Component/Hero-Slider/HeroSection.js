import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex justify-between m-10'>
            <div className='w-3/5 items-center my-auto'>
                <h1 className='text-5xl font-bold'>Next Generation Laptop!</h1>
                <h1 className='text-6xl font-bold text-yellow-500 pt-3 font-serif'>BEST PC IN 2030</h1>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore architecto omnis sequi quae corporis. Nostrum sequi, autem obcaecati dolor quas optio minima, praesentium distinctio omnis, ducimus dolores soluta sunt.</p>
                <button className='bg-red-400 rounded-lg px-6 py-3 mt-6 font-xl font-bold'>Learn More</button>
            </div>
            <div className='w-2/5 flex justify-center items-center'>
                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" className='h-84 w-76' />
            </div>
        </div>
    );
};

export default HeroSection;