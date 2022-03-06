import * as React from 'react';
import "./newList.scss";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getList } from '../../redux/movieListSlice';
import { useEffect } from "react";
import { createLists } from '../../redux/listsSlice';

interface INewProductProps {
}

const NewProduct: React.FunctionComponent<INewProductProps> = (props) => {

    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: RootState) => state.movies.movies);
    const content = useRef<HTMLSelectElement>(null!);
    useEffect(() => {

        dispatch(getList());

        return () => {

        }
    }, [])

    const [state, setState] = useState({
        title: '',
        type: 'movie',
        genre: '',
        content: [
            ''
        ]
    })
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "content") {
            const selected = Array.from(content.current.selectedOptions);
            const contents = selected.map(el => {
                return el.dataset.index;
            }) as string[]

            setState({
                ...state,
                content: contents
            })
        } else {
            setState({
                ...state,
                [name]: value
            })
        }

    }

    const createHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        dispatch(createLists(state));
    }

    return (
        <div className="new-movie">
            <h1 className="add-movie-title">New List</h1>
            <form className="add-movie-form">
                <div className="add-movie-item">
                    <label>Title</label>
                    <input type="text" placeholder='John Wick' name="title" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Type</label>
                    <select name="type" id="is-series" onChange={changeHandler}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="add-movie-item">
                    <label>Genre</label>
                    <input type="text" placeholder='Genre' name="genre" onChange={changeHandler} />
                </div>
                <div className="add-movie-item">
                    <label>Content</label>
                    <select multiple name="content" onChange={changeHandler} ref={content}>
                        {
                            movies.map(movie => {
                                return (
                                    <option key={movie.id} data-index={movie.id} value={movie.title}>{movie.title}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className="add-movie-button" onClick={createHandler}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default NewProduct;
