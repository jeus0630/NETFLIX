import { ArrowBackOutlined } from '@mui/icons-material';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./watch.scss";

interface IWatchProps {
}

type Location = {
    state: string;
}

const Watch: React.FunctionComponent<IWatchProps> = (props) => {
    const { state } = useLocation() as Location;
    const navigate = useNavigate();
    return (
        <div className="watch">

            <div className="back" onClick={() => navigate(-1)}>
                <ArrowBackOutlined></ArrowBackOutlined>
                Back
            </div>

            <video
                src={state}
                className="video"
                autoPlay
                controls ></video>
        </div>
    );
};

export default Watch;
