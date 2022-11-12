import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div>
                <h1 className='bannerTitle py-4 text-center '>Best food waiting for your belly</h1>
                <div className="search  mx-auto  ">
                    <input type="text" name="search" id="" placeholder='Search food items' />
                    <button className='btn btn-danger rounded-pill px-5'>Search</button>

                </div>
            </div>

        </div>
    );
};

export default Banner;