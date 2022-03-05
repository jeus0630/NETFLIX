import { Publish } from '@mui/icons-material';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import "./list.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../redux/store';
import { putLists } from '../../redux/listsSlice';
import {setListVal} from '../../redux/listsSlice';

interface IProductProps {
}

type Location = {
    pathname: string;
    state: {
        _id: string;
        id: string;
        title: string;
        type: string;
        genre: string;
        content: string[];
        createdAt: string
        updatedAt: string;
        __v: number;
    }
}

type List = {
    title: string;
    type: string;
    genre: string;
}

const Product: React.FunctionComponent<IProductProps> = (props) => {

    const navigate = useNavigate();
    const location = useLocation() as Location;
    const dispatch = useDispatch<AppDispatch>();

    const state = useSelector((state: RootState) => state.lists.list);

    useEffect(() => {

        dispatch(setListVal(location.state));

        return () => {

        }
    }, [])

    const [list, setList] = useState<List>({
        title: '',
        type: '',
        genre: ''
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setList({
            ...list,
            [name]: value
        })
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const id = location.pathname.split('list/')[1];

        const data = {
            id,
            list
        }

        dispatch(putLists(data));
    }

    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="product-title">List</h1>
                <button className="product-add-button" onClick={() => { navigate("/new-movie") }}>Create</button>
            </div>
            <div className="product-top">
                <div className="product-top-right">
                    <div className="product-info-top">
                        <span className="product-name">{state.title}</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">{state.id}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">genre:</span>
                            <span className="product-info-value">{state.genre}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">type:</span>
                            <span className="product-info-value">{state.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <label htmlFor="">List Title</label>
                        <input type="text" placeholder={state.title} onChange={changeHandler} name="title" />
                        <label htmlFor="">Type</label>
                        <input type="text" placeholder={state.type} onChange={changeHandler} name="type" />
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder={state.genre} onChange={changeHandler} name="genre" />
                    </div>
                    <div className="product-form-right">
                        <button className="product-button" onClick={clickHandler}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;
