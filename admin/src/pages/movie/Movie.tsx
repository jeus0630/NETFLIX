import { Publish } from '@mui/icons-material';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import "./movie.scss";
import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../redux/store';
import { resetPending, setMovie, setPending, updateMovie } from '../../redux/movieListSlice';
import LoadingSpin from "react-loading-spin";

interface IProductProps {
}

type Location = {
    pathname: string;
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
    const [info, setInfo] = useState<any>({
        uploaded: 0
    });
    const dispatch = useDispatch<AppDispatch>();
    const movie = useSelector((state: RootState) => state.movies.movie);
    const isPending = useSelector((state: RootState) => state.movies.isPending);

    useEffect(() => {

        if (info.uploaded === 3) {
            const id = location.pathname.split('movie/')[1];
            const stateInfo = {
                ...info,
                imgTitle: info.img,
                imgSm: info.img
            }
            dispatch(updateMovie({ id, info: stateInfo }));
        }


        return () => {

        }
    }, [info.uploaded])

    useEffect(() => {
        dispatch(setMovie(location.state));

        return () => {
            dispatch(resetPending());
        }
    }, [])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (e.target.type === "file") {
            const target = e.target as HTMLInputElement;
            const files = target.files;
            let file
            if (files) file = files[0];

            setInfo({
                ...info,
                [name]: file,
            })

        } else {
            setInfo({
                ...info,
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

                        setInfo((prev: any) => ({
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
                file: info.img, label: "img"
            },
            {
                file: info.trailer, label: "trailer"
            },
            {
                file: info.video, label: "video"
            }
        ]

        upload(files);
    }

    return (
        <div className="product">
            {
                isPending && (
                    <div className="loading-spin">
                        <LoadingSpin />
                    </div>
                )
            }
            <div className="product-title-container">
                <h1 className="product-title">Movie</h1>
                <button className="product-add-button" onClick={() => { navigate("/new-movie") }}>Create</button>
            </div>
            <div className="product-top">
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src={movie.img} alt="" className="product-info-img" />
                        <div>
                            <em className="product-title">{movie.title}</em>
                            <span className="product-desc">{movie.desc}</span>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">{movie.id}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">genre:</span>
                            <span className="product-info-value">{movie.genre}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">year:</span>
                            <span className="product-info-value">{movie.year}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">limit:</span>
                            <span className="product-info-value">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <label htmlFor="">Movie Title</label>
                        <input type="text" placeholder={movie.title} name="title" onChange={changeHandler} />
                        <label htmlFor="">Movie Description</label>
                        <input type="text" placeholder={movie.desc} name="desc" onChange={changeHandler} />
                        <label htmlFor="">Year</label>
                        <input type="text" placeholder={movie.year} name="year" onChange={changeHandler} />
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder={movie.genre} name="genre" onChange={changeHandler} />
                        <label htmlFor="">Limit</label>
                        <input type="text" placeholder={movie.limit} name="limit" onChange={changeHandler} />
                        <label htmlFor="">Trailer</label>
                        <input type="file" placeholder={movie.trailer} name="trailer" onChange={changeHandler} />
                        <label htmlFor="">Video</label>
                        <input type="file" placeholder={movie.video} name="video" onChange={changeHandler} />
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src={movie.img} alt="" className="product-upload-img" />
                            <label htmlFor="file">
                                <Publish></Publish>
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} name="img" onChange={changeHandler} />
                        </div>
                        <button className="product-button" onClick={uploadHandler}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;
