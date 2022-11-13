import React from 'react';
import './Product.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = ({ pd, handleProduct, handleAddToCart }) => {
    return (
        <div className='ProductCon  d-flex align-items-center justify-content-center col-sm-12  col-md-6 col-lg-4 col-xl-3'>

            {/* <div onClick={() => handleProduct(pd)} className="product p-4 my-3 "> */}
            <div className="product p-4 my-3 ">
                <div className="productImg d-flex align-items-center justify-content-center ">
                    <img src={pd.image} height={'200px'} alt="" />
                </div>
                <div className="title text-center">
                    <h6>{pd.name}</h6>
                    <p>{pd.description}</p>
                    <h4>${pd.price}</h4>
                </div>
                <div className="productsBtn">

                    <button onClick={() => handleAddToCart(pd)} className='btn btn-danger px-3 rounded-pill '><AddShoppingCartIcon /> Add </button>
                    <button onClick={() => handleProduct(pd)} className='btn btn-outline-success px-3 rounded-pill '><VisibilityIcon /> View</button>
                    {/* <button onClick={() => toast('fdjfjkl')}> wow</button> */}
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div >
    );
};

export default Product;