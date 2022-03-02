import * as React from 'react';
import "./sidebar.scss";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
    return (
        <div className='side-bar'>
            <div className="side-bar-wrapper">
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Dashboard</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <NavLink to="/" className={"link"}>
                                <LineStyle className="side-bar-icon"></LineStyle>
                                Home
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/analytics" className={"link"}>
                                <Timeline className="side-bar-icon"></Timeline>
                                Analytics
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/sales" className={"link"}>
                                <TrendingUp className="side-bar-icon"></TrendingUp>
                                Sales
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Quick Menu</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <NavLink to="/users" className={"link"}>
                                <PermIdentity className="side-bar-icon"></PermIdentity>
                                Users
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/products" className={"link"}>
                                <Storefront className="side-bar-icon"></Storefront>
                                Products
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/transactions" className={"link"}>
                                <AttachMoney className="side-bar-icon"></AttachMoney>
                                Transactions
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/reports" className={"link"}>
                                <BarChart className="side-bar-icon"></BarChart>
                                Reports
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Notifications</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <NavLink to="/mail" className={"link"}>
                                <MailOutline className="side-bar-icon"></MailOutline>
                                Mail
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/feedback" className={"link"}>
                                <DynamicFeed className="side-bar-icon"></DynamicFeed>
                                Feedback
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/messages" className={"link"}>
                                <ChatBubbleOutline className="side-bar-icon"></ChatBubbleOutline>
                                Messages
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Staff</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <NavLink to="/manage" className={"link"}>
                                <WorkOutline className="side-bar-icon"></WorkOutline>
                                Manage
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/analytics" className={"link"}>
                                <Timeline className="side-bar-icon"></Timeline>
                                Analytics
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/reports" className={"link"}>
                                <Report className="side-bar-icon"></Report>
                                Reports
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
