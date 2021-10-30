import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

import './Login.css';

const Login = () => {

    const { handleGoogleLogin, setIsLoading } = UseAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const signInUsingGoogle = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="login-style">
            <div className="button-style"><button onClick={signInUsingGoogle}>Login By Google</button></div>
        </div>
    );
};

export default Login;