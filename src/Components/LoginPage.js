import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ProductListingPage from '../Components/ProductListingPage';
import '../App.css';


const LoginPage = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleGuestLogin = () => {
        navigate('/product-listing');
    };   

    return (
        <div className="login-page">
            <img className='logo' src="cartlogo.png" />

            <button onClick={() => loginWithRedirect()}>Log In</button>
            <button onClick={handleGuestLogin}>Guest Login</button>
        </div>
    );
};

export default LoginPage;
