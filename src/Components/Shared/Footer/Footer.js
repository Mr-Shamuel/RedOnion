import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerImg from '../../../images/logo.png'
const Footer = () => {
    return (
        <div className='footer bg-dark '>
            <div className="footerTop container ">
                <div className="footerImg">
                    <img src={footerImg} height='50px' alt="" />

                </div>
                <div className="footerService">
                    <div className="footerItmes1">
                        <Link to='/'>About Online Food</Link>
                        <Link to='/'>Read our blog</Link>
                        <Link to='/'>Sign up to deliver</Link>
                        <Link to='/'>Add your restaurant</Link>
                    </div>
                    <div className="footerItmes2">
                        <Link to='/'>Get help</Link>
                        <Link to='/'>Read FAQs</Link>
                        <Link to='/'>View all cities</Link>
                        <Link to='/'>Restaurants near me</Link>
                    </div>

                </div>

            </div>


            <div className="footerBottom d-flex justify-content-between align-items-center  container">
                <p className='text-light text-muted'>Copyright @ 2022 Online food</p>
                <div className=" footernav d-flex  ">
                    <Link to='/'>Privacy Policy.</Link>
                    <Link to='/'>Terms of Use</Link>
                    <Link to='/'>Pricing</Link>

                </div>
            </div>

        </div>
    );
};

export default Footer; 