import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./user.scss";

interface IUserProps {
}

const User: React.FunctionComponent<IUserProps> = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className='user'>
            <div className="user-title-container">
                <h1 className='user-title'>Edit User</h1>
                <button className="user-add-button" onClick={() => navigate("/new-user")}>Create</button>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='user-show-img' />
                        <div className="user-show-top-title">
                            <span className="user-show-user-name">Anna Becker</span>
                            <span className="user-show-user-title">Software Engineer</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="user-show-title">
                            Account Details
                        </span>
                        <div className="user-show-info">
                            <PermIdentity className="user-show-icon"></PermIdentity>
                            <span className="user-show-info-title">annabeck99</span>
                        </div>
                        <div className="user-show-info">
                            <CalendarToday className="user-show-icon"></CalendarToday>
                            <span className="user-show-info-title">10.12.1999</span>
                        </div>
                        <span className="user-show-title">Contact Details</span>
                        <div className="user-show-info">
                            <PhoneAndroid className="user-show-icon"></PhoneAndroid>
                            <span className="user-show-info-title">+1 123 456 789</span>
                        </div>
                        <div className="user-show-info">
                            <MailOutline className="user-show-icon"></MailOutline>
                            <span className="user-show-info-title">annabeck99@gmail.com</span>
                        </div>
                        <div className="user-show-info">
                            <LocationSearching className="user-show-icon"></LocationSearching>
                            <span className="user-show-info-title">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <div className="user-update-title">Edit</div>
                    <form action="" className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="annabeck99" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label htmlFor="">Full name</label>
                                <input type="text" placeholder="Anna Becker" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="+1 123 456 67" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="New York | USA" className="user-update-input" />
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img className='user-update-img' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                <label htmlFor="file">
                                    <Publish className='user-update-icon'></Publish>
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="user-update-button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;
