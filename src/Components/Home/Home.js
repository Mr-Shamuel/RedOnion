import React, { createContext, useState } from 'react';
import Banner from '../Pages/Banner/Banner';
import Categories from '../Pages/Categories/Categories';
import Services from '../Pages/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <Categories ></Categories>
            <Services></Services>
            <Footer></Footer>



            <ToastContainer></ToastContainer>


        </div>
    );
};

export default Home;