import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Header.css'
import Cart from '../../Pages/Cart/Cart';

const Header = ({ cart }) => {


    return (
        <div className='header'>
            <nav className='navs' >
                <div className="navBanner ">
                    <Link to='/'>  <img height={'40px'} src={logo} alt="" /></Link>
                </div>
                <div className="navItems">
                    <Link to='/cart' className='btn btn-outline-success   border border-0 rounded-circle '> <AddShoppingCartIcon className='cartBtn  '> </AddShoppingCartIcon> {cart?.length}</Link>
                    <Link to='/login' className='btn btn-outline-primary fw-bold text-dark border border-0 rounded-pill px-4'>Login</Link>
                    <Link to='/register' className='btn btn-danger rounded-pill px-4 fw-bold'>Signup</Link>
                </div>


            </nav>


        </div>
    );
};

export default Header;