import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { setLogout } from "../../redux/userSlice";

interface INavbarProps { }

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.pageYOffset ? true : false);
    });

    return () => { };
  }, []);

  const logoutHandler = () => {
    dispatch(setLogout());
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="netflix-logo"
            onClick={() => navigate("/")}
          />
          <NavLink to="/" className={"link"}>
            Homepage
          </NavLink>
          <NavLink to="/series" className={"link stay"}>
            Series
          </NavLink>
          <NavLink to="/movies" className={"link stay"}>
            Movies
          </NavLink>
          <NavLink to="/new-and-popular" className={"link"}>
            New and Popular
          </NavLink>
          <NavLink to="/mylist" className={"link"}>
            My List
          </NavLink>
        </div>
        <div className="right">
          <Search className="icon"></Search>
          <span>KID</span>
          <Notifications className="icon"></Notifications>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon"></ArrowDropDown>
            <div className="options">
              <span>Settings</span>
              <span onClick={logoutHandler}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
