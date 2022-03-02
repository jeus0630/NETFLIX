import * as React from 'react';
import "./newUser.scss";

interface INewUserProps {
}

const NewUser: React.FunctionComponent<INewUserProps> = (props) => {
    return (
        <div className="new-user">
            <h1 className="new-user-title">New User</h1>
            <form action="" className="new-user-form">
                <div className="new-user-form-item">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="john@gmail.com" />
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="john@gmail.com" />
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Phone</label>
                    <input type="password" placeholder="+1 123 456 78" />
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Address</label>
                    <input type="password" placeholder="New York | USA" />
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Gender</label>
                    <div className="new-user-gender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="new-user-form-item">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="new-user-select">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <button className="new-user-button">Create</button>
            </form>
        </div>
    );
};

export default NewUser;
