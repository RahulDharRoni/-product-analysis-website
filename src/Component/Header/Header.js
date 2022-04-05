import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex mx-auto justify-center items-center p-6'>
            <CustomLink to="/" className='p-1 font-bold m-4'>HOME</CustomLink>
            <CustomLink to='/reviews' className='p-1 font-bold m-4 '>REVIEWS</CustomLink>
            <CustomLink to='/dashboard' className='p-1 font-bold m-4' >DASHBOARD</CustomLink>
            <CustomLink to='/blogs' className='p-1 font-bold m-4'>BLOGS</CustomLink>
            <CustomLink to='/about' className='p-1 font-bold m-4'>ABOUT</CustomLink>

        </div>

    );
};

export default Header;