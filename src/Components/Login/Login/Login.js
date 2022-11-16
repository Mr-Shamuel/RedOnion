import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import fb from '../../../icon/fb.png'
import google from '../../../icon/google.png'
import { ToastContainer, toast } from 'react-toastify';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (e) => {
        signInWithEmailAndPassword(email, password);
        console.log(error)
        e.preventDefault();
    }


    //google signing
    const [GoogleSignIn] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state?.from?.pathname || '/';

    const HandleGoogleSignIn = () => {
        GoogleSignIn()
            .then(() => {
                navigate(form, { replace: true })
            })
    }
    //sending reset password
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );


    //if user exist then redirect 

    if (user) {
        navigate(form, { replace: true })
    }

    //loading user 
    if (loading) {
        return <div className="spinner-border text-danger text-center d-block mx-auto mt-5 " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }


    return (
        <div>
            {/* //toast notifications */}
            <ToastContainer></ToastContainer>
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


                        <TextField onBlur={handleEmail} id="standard-basic" label="Username or Email" variant="standard" />
                        <br />
                        <br />

                        <TextField onBlur={handlePassword} id="standard-basic" label="Password" type='password' variant="standard" /> <br />
                        <Link onClick={() => { sendPasswordResetEmail(email); toast("Reset mail send") }} className='text-warning'> Forget Password</Link>

                        {
                            error && <p className='text-danger text-center'>{error.message}</p>
                        }

                        <button className='registerBtn btn btn-primary mt-4 my-2' type='submit'>Login</button>
                        <p className='registerAlready text-center'>Don't have an account? <span> <Link to='/register'>Create an account</Link></span></p>




                    </Box>
                    <div className='borders'>

                        <p></p> <span> Or </span> <p></p>

                    </div>

                    <div className="socialButton">

                        <div onClick={HandleGoogleSignIn} className="facebookBtn btn btn-outline-info text-dark  border"><img src={fb} alt="" /> <p className='pt-1'>Continue with Facebook</p></div>
                        <br />
                        <div onClick={HandleGoogleSignIn} className="googleBtn btn btn-outline-info text-dark border"><img src={google} alt="" /><p className='pt-1'>Continue with Google</p> </div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Login;