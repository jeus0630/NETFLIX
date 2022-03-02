import * as React from 'react';
import "./topbar.scss";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

interface ITopbarProps {
}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-wrapper">
                <div className="top-left">
                    <span className="logo">JewooAdmin</span>
                </div>
                <div className="top-right">
                    <div className="top-bar-icon-container">
                        <NotificationsNone></NotificationsNone>
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="top-bar-icon-container">
                        <Language></Language>
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="top-bar-icon-container">
                        <Settings></Settings>
                    </div>
                    <div className="img-wrap">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="top-avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
