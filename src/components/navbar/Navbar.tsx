import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.pageYOffset ? true : false);
    });

    return () => {};
  }, []);

  return (
      <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <NavLink to="/" className={"link"}>
            Homepage
          </NavLink>
          <NavLink to="/series" className={"link"}>
            Series
          </NavLink>
          <NavLink to="/movies" className={"link"}>
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
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
