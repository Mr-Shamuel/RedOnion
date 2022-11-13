import React, { createContext, useState } from 'react';
import Banner from '../Pages/Banner/Banner';
import Categories from '../Pages/Categories/Categories';
import Services from '../Pages/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
    const [cart, setCart] = useState([])
    const handleAddToCart = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart);
        toast("Product added");

    }


    return (
        <div>
            <Header cart={cart}></Header>
            <Banner></Banner>
            <Categories handleAddToCart={handleAddToCart}></Categories>
            <Services></Services>
            <Footer></Footer>



            <ToastContainer></ToastContainer>


        </div>
    );
};

export default Home;