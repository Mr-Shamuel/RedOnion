import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
import { signOut } from 'firebase/auth';
const Header = ({ cart }) => {
    const [user] = useAuthState(auth);

    console.log(user)
    return (
        <div className='header'>

            <nav className='navs' >
                <div className="navBanner ">
                    <Link to='/'>  <img height={'40px'} src={logo} alt="" /></Link>
                </div>
                <div className="navItems">
                    <Link onClick={() => window.location.reload()} className='btn btn-outline-success   border border-0 rounded-pill '> {user?.email && (user?.displayName || 'user')}</Link>
                    <Link to='/cart' className='btn btn-outline-success   border border-0 rounded-circle '> <AddShoppingCartIcon className='cartBtn  '> </AddShoppingCartIcon> {cart?.length}</Link>
                    {
                        user?.email ? <Link onClick={() => signOut(auth)} className='btn btn-danger rounded-pill px-4 fw-bold'>SignOut</Link>
                            : <span>
                                <Link to='/login' className='btn btn-outline-primary fw-bold text-dark border border-0 rounded-pill px-4'>Login</Link>
                                <Link to='/register' className='btn btn-danger rounded-pill px-4 fw-bold'>Signup</Link>
                            </span>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;