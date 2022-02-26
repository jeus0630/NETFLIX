import * as React from 'react';
import { useState, useRef } from 'react';
import "./register.scss";

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);

    const passwordClickHandler = () => {
        setPassword(passwordRef.current.value);
    }

    const emailClickHandler = () => {
        setEmail(emailRef.current.value);
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" />
                    <button className='login-button'>Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    email ? (
                        <form className="input-wrap">
                            <input type="password" placeholder='password' ref={passwordRef} />
                            <button className="register-button" onClick={passwordClickHandler}>Start</button>
                        </form>
                    ) : (
                        <div className="input-wrap">
                            <input type="email" placeholder='email address' ref={emailRef} />
                            <button className="register-button" onClick={emailClickHandler}>Get Started</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Register;
