import * as React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.scss";

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const navigate = useNavigate();

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" onClick={() => navigate("/")} />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' />
                    <input type="password" placeholder='Password' />
                    <button className="login-button">Sign In</button>
                    <span>New to Netflix? <b onClick={() => navigate('/register')}>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b>
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;