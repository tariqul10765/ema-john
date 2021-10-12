import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const handleProccedToShipping = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <form>
                    <input type="email" placeholder='enter your email'/><br />
                    <input type="password" placeholder='enter your password'/><br />
                    <input type="submit" value="submit" />
                </form>
                <button onClick={handleProccedToShipping}>Google login</button>
            </div>
        </div>
    );
};

export default Login;