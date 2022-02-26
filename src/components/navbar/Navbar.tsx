import { Search } from "@mui/icons-material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <NavLink to="/">H omepage</NavLink>
          <NavLink to="/series">Series</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/new-and-popular">New and Popular</NavLink>
          <NavLink to="/mylist">My List</NavLink>
        </div>
        <div className="right">
          <Search></Search>
          <span>KID</span>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
