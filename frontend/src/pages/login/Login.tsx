import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { logInUser } from '../../redux/userSlice';
import "./login.scss";

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user);
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {

        if (user.isLogIn) {
            navigate("/");
        }

        return () => {

        }
    }, [user.isLogIn])


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfo({
            ...info,
            [name]: value
        })
    }

    const logInHandler = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
        e.preventDefault();
        dispatch(logInUser(info));
    }

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
                    <input type="email" placeholder='Email or phone number' name="email" onChange={changeHandler} />
                    <input type="password" placeholder='Password' name="password" onChange={changeHandler} />
                    {
                        user.wrongInfo && (
                            <span className='warning'>Wrong Email or Password</span>
                        )
                    }
                    <button className="login-button" onClick={logInHandler}>Sign In</button>
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