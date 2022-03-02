import { ArrowBackOutlined } from '@mui/icons-material';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./watch.scss";

interface IWatchProps {
}

type Location = {
    state: string;
}

const Watch: React.FunctionComponent<IWatchProps> = (props) => {
    const { state } = useLocation() as Location;

    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined></ArrowBackOutlined>
                    Home
                </div>
            </Link>
            <video
                src={state}
                className="video"
                autoPlay
                controls ></video>
        </div>
    );
};

export default Watch;
