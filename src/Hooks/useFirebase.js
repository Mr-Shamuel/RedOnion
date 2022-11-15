import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config'
import { useNavigate } from "react-router-dom";
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const navigate = useNavigate()

    //google signin
    const provider = new GoogleAuthProvider();
    const HandleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user.displayName)
                navigate('/')

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)

            });
    }

    //google signOut
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            });
    }

    //checking current user 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])


    return {
        user,
        error,
        HandleGoogleSignIn,
        handleSignOut
    }
}
export default useFirebase;