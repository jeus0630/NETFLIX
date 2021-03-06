import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./listItem.scss";

interface IListItemProps {
    index: number;
    id: string;
}

type Info = {
    _id: string;
    title: string;
    desc: string;
    img: string;
    imgTitle: string;
    trailer: string;
    video: string;
    year: string;
    limit: string;
    genre: string;
    isSeries: boolean;
    createdAt: string;
    updatedAt: string;
    duration: string;
    __v: number;
}

const ListItem: React.FunctionComponent<IListItemProps> = ({ index, id }) => {

    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    const [info, setInfo] = useState<Info>({
        _id: '',
        title: '',
        desc: '',
        img: '',
        imgTitle: '',
        trailer: '',
        video: '',
        year: '',
        limit: '',
        genre: '',
        isSeries: false,
        createdAt: '',
        updatedAt: '',
        duration: '',
        __v: 0
    });

    useEffect(() => {

        const movieInfoFetching = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/movies/${id}`, {
                    headers: {
                        token: JSON.parse(localStorage.getItem("user") as string)
                    }
                });
                const data = await res.json();

                setInfo({
                    ...info,
                    ...data
                });
            } catch (err) {
                console.log(err);

            }
        }

        movieInfoFetching();

        return () => {

        }

    }, [])

    return (
        <li className="list-item"
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
            style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : undefined }}>
            <Link to="/watch" state={trailer}>
                <img src={info.img || '/images/gray-box.jpeg'}
                    alt="" />
                {
                    isHovered && (
                        <>
                            <video src={trailer} autoPlay={true} loop></video>
                            <div className="item-info">
                                <div className="icons">
                                    <PlayArrow className='icon'></PlayArrow>
                                    <Add className='icon'></Add>
                                    <ThumbUpAltOutlined className='icon'></ThumbUpAltOutlined>
                                    <ThumbDownAltOutlined className='icon'></ThumbDownAltOutlined>
                                </div>
                                <div className="item-info-top">
                                    <span>{info.duration}</span>
                                    <span className='limit'>+{info.limit}</span>
                                    <span>{info.year}</span>
                                </div>
                                <div className="desc">
                                    {info.desc}
                                </div>
                                <div className="genre">{info.genre}</div>
                            </div>
                        </>
                    )
                }
            </Link>
        </li>
    );

};

export default ListItem;
