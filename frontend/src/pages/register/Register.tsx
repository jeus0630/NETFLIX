import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../../redux/store';
import { registerUser, setInfo, resetState } from '../../redux/userSlice';
import "./register.scss";

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

    const navigate = useNavigate();
    const info = useSelector((state: RootState) => state.user.info);
    const isCreated = useSelector((state: RootState) => state.user.isCreated);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        
        if (isCreated) { navigate("/login"); console.log('???') }

        return () => {
            dispatch(resetState());
        }

    }, [isCreated])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        dispatch(setInfo({
            ...info,
            [name]: value
        }));

    }

    const registerHandler = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
        e.preventDefault();

        const username = info.email.split("@")[0];

        const data = {
            ...info,
            username
        }

        dispatch(registerUser(data));
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" onClick={() => navigate("/")} />
                    <button className='login-button' onClick={() => navigate("/login")}>Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    info.step ? (
                        <form className="input-wrap">
                            <input type="password" placeholder='password' name="password" onChange={changeHandler} />
                            <button className="register-button" onClick={registerHandler}>Start</button>
                        </form>
                    ) : (
                        <div className="input-wrap">
                            <input type="email" placeholder='email address' name="email" onChange={changeHandler} />
                            <button className="register-button" onClick={() => dispatch(setInfo({ ...info, step: info.step + 1 }))}>Get Started</button>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default Register;
