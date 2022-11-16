import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MealData from '../../../FakeData';
import CategoryNav from '../CategoryNav/CategoryNav';
import Food from '../Food/Food';
import Product from '../Product/Product';

const Categories = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(MealData);



    const filterResult = (value) => {
        const result = MealData.filter(x => x.categories === value)
        setData(result);

    }

    const handleProduct = (pd) => {
        navigate(`/food/${pd.id}`)

    }

    return (
        <div id='cate' className=' Categories py-5'>
            <div className="categoryNav d-flex align-items-center justify-content-center mb-4">
                {/* <button className='btn btn-outline-primary  px-4 mx-3 fw-bold' onClick={() => filterResult('Breakfast')}> Breakfast</button>
                <button className='btn btn-outline-warning px-4 mx-3 fw-bold' onClick={() => filterResult('Lunch')}> Lunch</button>
                <button className='btn btn-outline-danger px-4 mx-3 fw-bold' onClick={() => filterResult('Dinner')}> Dinner</button> */}

                <CategoryNav filterResult={filterResult}></CategoryNav>
            </div>

            <div className="productContainer container">


                <div className="row">
                    {
                        data.slice(0, 10).map(pd => <Product pd={pd} key={pd.id} handleProduct={handleProduct}  ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Categories;