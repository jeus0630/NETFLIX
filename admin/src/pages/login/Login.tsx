import * as React from 'react';
import "./login.scss";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { postLogin } from '../../redux/loginSlice';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLogin({
            ...login,
            [name]: value
        })
    }

    const dispatch = useDispatch<AppDispatch>();
    const isPending = useSelector((state: RootState) => state.login.isPending);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(postLogin({
            button: e.target,
            login
        }));
    }

    return (
        <div className="login">
            <form action="" className="login-form">
                <input type="email" name="email" className="login-input" placeholder='email' onChange={changeHandler} value={login.email} />
                <input type="password" name="password" className="login-input" placeholder='password' onChange={changeHandler} value={login.password} />
                <button className='login-button' onClick={clickHandler} disabled={isPending}>Login</button>
            </form>
        </div>
    );
};

export default Login;
