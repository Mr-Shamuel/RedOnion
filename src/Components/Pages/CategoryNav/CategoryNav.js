import React from 'react';

const CategoryNav = ({ filterResult }) => {
    return (
        <div>
            <button className='btn btn-outline-primary  px-4 mx-3 fw-bold' onClick={() => filterResult('Breakfast')}> Breakfast</button>
            <button className='btn btn-outline-warning px-4 mx-3 fw-bold' onClick={() => filterResult('Lunch')}> Lunch</button>
            <button className='btn btn-outline-danger px-4 mx-3 fw-bold' onClick={() => filterResult('Dinner')}> Dinner</button>

        </div>
    );
};

export default CategoryNav;