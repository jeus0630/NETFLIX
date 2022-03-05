import { Publish } from '@mui/icons-material';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import "./movie.scss";
import { useState } from "react";

interface IProductProps {
}

type Location = {
    state: {
        createdAt: string;
        desc: string;
        genre: string;
        id: string;
        img: string;
        imgSm: string;
        imgTitle: string;
        isSeries: boolean;
        limit: string;
        title: string;
        trailer: string;
        updatedAt: string;
        video: string;
        year: string;
        __v: number;
        _id: string;
    }
}

const Product: React.FunctionComponent<IProductProps> = (props) => {

    const navigate = useNavigate();
    const location = useLocation() as Location;
    const [info, setInfo] = useState({
        title: '',
        desc: '',
        year: '',
        genre: '',
        limit: '',
        trailer: '',
        video: '',
        img: '',
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setInfo({
            ...info,
            [name] : value
        });
    }

    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="product-title">Movie</h1>
                <button className="product-add-button" onClick={() => { navigate("/new-movie") }}>Create</button>
            </div>
            <div className="product-top">
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src={location.state.img} alt="" className="product-info-img" />
                        <div>
                            <em className="product-title">{location.state.title}</em>
                            <span className="product-desc">{location.state.desc}</span>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">{location.state.id}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">genre:</span>
                            <span className="product-info-value">{location.state.genre}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">year:</span>
                            <span className="product-info-value">{location.state.year}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">limit:</span>
                            <span className="product-info-value">{location.state.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <label htmlFor="">Movie Title</label>
                        <input type="text" placeholder={location.state.title} name="title" onChange={changeHandler}/>
                        <label htmlFor="">Movie Description</label>
                        <input type="text" placeholder={location.state.desc} name="desc" onChange={changeHandler}/>
                        <label htmlFor="">Year</label>
                        <input type="text" placeholder={location.state.year} name="year" onChange={changeHandler}/>
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder={location.state.genre} name="genre" onChange={changeHandler}/>
                        <label htmlFor="">Limit</label>
                        <input type="text" placeholder={location.state.limit} name="limit" onChange={changeHandler}/>
                        <label htmlFor="">Trailer</label>
                        <input type="file" placeholder={location.state.trailer} name="trailer" onChange={changeHandler}/>
                        <label htmlFor="">Video</label>
                        <input type="file" placeholder={location.state.video} name="video" onChange={changeHandler}/>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src={location.state.img} alt="" className="product-upload-img" />
                            <label htmlFor="file">
                                <Publish></Publish>
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} name="img" onChange={changeHandler}/>
                        </div>
                        <button className="product-button">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;
