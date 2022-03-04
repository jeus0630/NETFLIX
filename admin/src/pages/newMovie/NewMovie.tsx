import * as React from 'react';
import "./newMovie.scss";
import { useState } from "react";

interface INewProductProps {
}

type Movie = {
    image: string;
    imgTitle: string;
    imgSm: string;
    title: string;
    description: string;
    year: string;
    genre: string;
    duration: string;
    limit: string;
    isSeries: boolean;
    trailer: string;
    video: string;
}

const NewProduct: React.FunctionComponent<INewProductProps> = (props) => {

    const [movie, setMovie] = useState<Movie>({
        image: "",
        imgTitle: "",
        imgSm: "",
        title: "",
        description: "",
        year: "",
        genre: "",
        duration: "",
        limit: "",
        isSeries: false,
        trailer: "",
        video: ""
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setMovie({
            ...movie,
            [name]: value
        })
    }

    console.log(movie);


    return (
        <div className="new-movie">
            <h1 className="add-movie-title">New Movie</h1>
            <form className="add-movie-form">

                <div className="add-movie-item">
                    <label>Image</label>
                    <input
                        type="file"
                        id="img"
                        name="image"
                        onChange={changeHandler}
                    />
                </div>
                <div className="add-movie-item">
                    <label>Title Image</label>
                    <input
                        type="file"
                        id="img-title"
                        name="imgTitle"
                        onChange={changeHandler}
                    />
                </div>
                <div className="add-movie-item">
                    <label>Thumbnail image</label>
                    <input
                        type="file"
                        id="imgSm"
                        name="imgSm"
                        onChange={changeHandler}
                    />
                </div>
                <div className="add-movie-item">
                    <label>Title</label>
                    <input type="text" placeholder='John Wick' name="title" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Description</label>
                    <input type="text" placeholder='Description' name="description" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Year</label>
                    <input type="text" placeholder='Year' name="year" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Genre</label>
                    <input type="text" placeholder='Genre' name="genre" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Duration</label>
                    <input type="text" placeholder='Duration' name="duration" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Limit</label>
                    <input type="text" placeholder='Limit' name="limit" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Is Series?</label>
                    <select name="isSeries" id="is-series" onChange={changeHandler}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="add-movie-item">
                    <label>Trailer</label>
                    <input type="file" name="trailer" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Video</label>
                    <input type="file" name="video" onChange={changeHandler} />
                </div>
                <button className="add-movie-button">
                    Create
                </button>
            </form>
        </div>
    );
};

export default NewProduct;
