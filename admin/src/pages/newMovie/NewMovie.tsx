import * as React from 'react';
import "./newMovie.scss";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import { create } from '@mui/material/styles/createTransitions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { createMovie, resetPending, setPending } from '../../redux/movieListSlice';
import { useEffect } from "react";
import LoadingSpin from "react-loading-spin";

interface INewProductProps {
}

type Movie = {
    [key: string]: any;
}

const NewProduct: React.FunctionComponent<INewProductProps> = (props) => {

    const [movie, setMovie] = useState<Movie>({ uploaded: 0 });
    const dispatch = useDispatch<AppDispatch>();
    const isPending = useSelector((state: RootState) => state.movies.isPending);

    useEffect(() => {

        if (movie.uploaded === 5) dispatch(createMovie(movie));


        return () => {
            dispatch(resetPending());
        }
    }, [movie.uploaded])


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (e.target.type === "file") {
            const target = e.target as HTMLInputElement;
            const files = target.files;
            let file
            if (files) file = files[0];

            setMovie({
                ...movie,
                [name]: file,
            })

        } else {
            setMovie({
                ...movie,
                [name]: value
            })
        }
    }

    const upload = (param: { file: any; label: string; }[]) => {

        param.forEach((item, idx) => {

            /** @type {any} */
            const file = item.file as any;
            const type = file.type;

            const metadata = {
                contentType: type
            };

            const fileName = new Date().getTime() + item.label + file.name;

            const storageRef = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        setMovie(prev => ({
                            ...prev,
                            uploaded: prev.uploaded + 1,
                            [item.label]: downloadURL
                        }))
                    });
                }
            );
        })


    }

    const uploadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        dispatch(setPending());

        const files = [
            {
                file: movie.img, label: "img"
            },
            {
                file: movie.imgTitle, label: "imgTitle"
            },
            {
                file: movie.imgSm, label: "imgSm"
            },
            {
                file: movie.trailer, label: "trailer"
            },
            {
                file: movie.video, label: "video"
            }
        ]

        upload(files);
    }


    return (
        <div className="new-movie">
            {
                isPending && (
                    <div className="loading-spin">
                        <LoadingSpin />
                    </div>
                )
            }
            <h1 className="add-movie-title">New Movie</h1>
            <form className="add-movie-form">

                <div className="add-movie-item">
                    <label>Image</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
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
                    <input type="text" placeholder='Description' name="desc" onChange={changeHandler} />
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

                <button className="add-movie-button" onClick={uploadHandler}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default NewProduct;
