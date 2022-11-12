import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className='navs' >
                <div className="navBanner">
                    <img height={'40px'} src={logo} alt="" />
                </div>
                <div className="navItems">
                    <Link className='btn btn-outline-success   border border-0 rounded-circle py-2'> <AddShoppingCartIcon className='cartBtn  '></AddShoppingCartIcon></Link>
                    <Link className='btn btn-outline-primary fw-bold text-dark border border-0 rounded-pill px-4'>Login</Link>
                    <Link className='btn btn-danger rounded-pill px-4 fw-bold'>Signup</Link>
                </div>


            </nav>


        </div>
    );
};

export default Header;