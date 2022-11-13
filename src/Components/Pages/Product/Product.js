import React from 'react';
import './Product.css'
const Product = ({ pd }) => {
    console.log(pd)
    return (
        <div className='ProductCon  d-flex align-items-center justify-content-center col-sm-12  col-md-6 col-lg-4 col-xl-3'>

            <div className="product   p-4 my-3 ">
                <div className="productImg d-flex align-items-center justify-content-center ">
                    <img src={pd.image} height={'200px'} alt="" />
                </div>
                <div className="title text-center">
                    <h6>{pd.name}</h6>
                    <p>{pd.description}</p>
                    <h4>${pd.price}</h4>
                </div>
            </div>

        </div>
    );
};

export default Product;