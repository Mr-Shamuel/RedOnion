import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Categories from '../Pages/Categories/Categories';
import Services from '../Pages/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Categories></Categories>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default Home;