import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../../FirebaseSetup/Firebase.init';

import { GoogleAuthProvider, onAuthStateChanged,  signInWithPopup, signOut , getAuth} from "firebase/auth";

initializeAuthentication();

const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                alert("You will be Sign Out");
                
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    return {
        handleGoogleLogin,
        handleSignOut,
        setIsLoading,
        isLoading,
        user
    };
};

export default UseFirebase;