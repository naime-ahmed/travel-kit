import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from './UseAuth';

const MakePrivate = ({ children, ...rest }) => {

    const { user, isLoading } = UseAuth();
    if (isLoading) {
        return <div style={{textAlign:"center", height:"100vh"}}><h3>Loading.......</h3></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: {from: location}
                }}
            />}
        >
        </Route>
        
    );
};

export default MakePrivate;