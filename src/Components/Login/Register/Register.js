import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import fb from '../../../icon/fb.png'
import google from '../../../icon/google.png'
import './Register.css'
import useFirebase from '../../../Hooks/useFirebase';

const Register = () => {
    const { HandleGoogleSignIn } = useFirebase();


    return (
        <div>
            <div className='register mt-4'>
                <div>
                    <Box className='registerCon'

                        component="form"
                        sx={{
                            '& > :not(style)': { mx: 3, my: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h4>Create an account</h4>

                        <TextField id="standard-basic" label="Name" variant="standard" />
                        <br />
                        <br />
                        <TextField id="standard-basic" label="Username or Email" variant="standard" />
                        <br />
                        <br />

                        <TextField id="standard-basic" label="Password" variant="standard" /> <br />

                        <button className='registerBtn btn btn-success mt-4 my-2' type='submit'>Create an account</button>
                        <p className='registerAlready text-center'>Already have an account? <span> <Link to='/login'>Login</Link></span></p>




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

export default Register;