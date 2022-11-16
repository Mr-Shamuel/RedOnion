import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
import Swal from 'sweetalert2'
const Cart = () => {

    const [user] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        const address = e.target.address.value;
        if (address) {
            Swal.fire(
                'Good job!',
                'Your order successfully Placed!',
                'success'
            )

        } else {
            Swal.fire(
                'Error!',
                'Please Enter your address',
                'error'
            )
        }

    }
    return (
        <div>

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
                        <h4 className='text-danger '>Shipping Form</h4>


                        <TextField id="standard-basic" label="Namel" variant="standard" value={user?.displayName} />
                        <br />
                        <TextField id="standard-basic" label=" Email" variant="standard" value={user?.email} />
                        <br />


                        <TextField id="standard-basic" name='address' label="Address" type='text' variant="standard" required />

                        <br />
                        <button className='registerBtn btn btn-primary mt-4 my-2' type='submit' required>Proceed Order</button>

                    </Box>

                </div>



            </div>
        </div >
    );
};

export default Cart;