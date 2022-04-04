import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex mx-auto justify-center items-center p-6 bg-orange-200'>
            <CustomLink to="/" className='p-5 font-bold'>HOME</CustomLink>
            <CustomLink to='/reviews' className='p-5 font-bold'>REVIEWS</CustomLink>
            <CustomLink to='/dashboard' className='p-5 font-bold' >DASHBOARD</CustomLink>
            <CustomLink to='/blogs' className='p-5 font-bold'>BLOGS</CustomLink>
            <CustomLink to='/about' className='p-5 font-bold'>ABOUT</CustomLink>

        </div>

    );
};

export default Header;