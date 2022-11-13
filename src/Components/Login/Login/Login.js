import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';
import fb from '../../../icon/fb.png'
import google from '../../../icon/google.png'
import Header from '../../Shared/Header/Header';
// import './Login.css'

const Login = () => {


    // Creating signing  accunt

    const handleBlurEmail = (e) => {

    }
    const handleBlurPassword = (e) => {

    }


    //hendlesubmit

    const handleSubmit = () => {

    }

    // google signin 
    const HandleGoogleSignIn = () => {



    }
    //reset password 
    const handleForgetPassword = () => {


    }

    return (
        <div>
            <Header></Header>
            <div className='register mt-5  '>
                <div>

                    <Box className='registerCon'
                        onSubmit={handleSubmit}
                        component="form"
                        sx={{
                            '& > :not(style)': { mx: 3, my: 2, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h4>Login</h4>


                        <TextField onBlur={handleBlurEmail} id="standard-basic" label="Username or Email" variant="standard" />
                        <br />
                        <br />

                        <TextField onBlur={handleBlurPassword} id="standard-basic" label="Password" variant="standard" /> <br />
                        <Link onClick={handleForgetPassword} className='text-warning'> Forget Password</Link>


                        <button className='registerBtn btn btn-primary mt-4 my-2' type='submit'>Login</button>
                        <p className='registerAlready text-center'>Don't have an account? <span> <Link to='/register'>Create an account</Link></span></p>




                    </Box>
                    <div className='borders'>

                        <p></p> <span> Or </span> <p></p>

                    </div>

                    <div className="socialButton">

                        <div className="facebookBtn btn btn-outline-info text-dark  border"><img src={fb} alt="" /> <p className='pt-1'>Continue with Facebook</p></div>
                        <br />
                        <div onClick={HandleGoogleSignIn} className="googleBtn btn btn-outline-info text-dark border"><img src={google} alt="" /><p className='pt-1'>Continue with Google</p> </div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Login;