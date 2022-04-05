import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='py-10 mx-auto'>
                <h1 className='text-bold text-3xl font-bold font-sans text-orange-900 border p-2 text-center mx-auto my-auto'>Rahul Dhar Roni</h1>
                <p className=''>Developed by Rahul Dhar ROni</p>
            </div>
            <div className='py-5'>
                <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/245034757_6279526252122843_7837764151681250083_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEnYfWrMcavnWwV61ryjPbxkJlN3jvLP1uQmU3eO8s_W68aIVOXwYa2dvWXDN7W5Yqhq2jZe_3_O5nqFeJJFw6b&_nc_ohc=6mRKmaq5PywAX_nDnq8&_nc_ht=scontent.fdac27-1.fna&oh=00_AT9lhtRLT_QMsLQYe3Kpm4pXze8I0UTwqQ5PwyBx7KWq6A&oe=62514C3B" alt="" className='w-96 h-96 mx-auto my-auto rounded' />
            </div>

        </div>
    );
};

export default About;