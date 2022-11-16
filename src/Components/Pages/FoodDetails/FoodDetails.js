import React, { useState } from 'react';
import './foodDetails.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FoodDetails = ({ food }) => {
    const { name, image, price } = food;

    const [count, setCount] = useState(1);
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            alert('Atlest select a item');
        }
    }
    return (
        <div className=' foodDetails  '>

            <ToastContainer></ToastContainer>

            <div className="row container">

                <div className="pt-5 mr-5 d-flex align-items-start justify-content-center  col-md-6 col-sm-12 ">
                    <div>
                        <h1 className='display-5 fw-bold '>{name}</h1>
                        <p className='text-muted '>A vast number of foods are both healthy and tasty.By filling your plate with fruits, vegetables, quality protein sources, and other whole foods, you’ll have meals that are colorful, versatile, and good for you. A healthy diet includes the following: Fruit, vegetables, legumes (e.g. lentils and beans), nuts and rice</p>
                        <div className="price">
                            <h4 className='display-4  fw-bold mx-3'>${(price * count).toFixed(2)} </h4>
                            <div className="counter px-4">
                                <RemoveIcon onClick={handleDecrement}></RemoveIcon>
                                <h6 className='display-6 mx-3 '>{count}   </h6>
                                <AddIcon className='text-danger' onClick={() => setCount(count + 1)}></AddIcon>
                            </div>
                        </div>

                        <button onClick={() => { toast("food added"); }} className='btn btn-danger px-4 rounded-pill py-2 mt-3'><AddShoppingCartIcon /> Add</button>
                    </div>

                </div>
                <div className="col-md-6 col-sm-12 ">
                    <img src={image} width={'600px'} alt="" />
                </div>
            </div>

        </div >
    );
};

export default FoodDetails;