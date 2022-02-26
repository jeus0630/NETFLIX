import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <img
        width={"100%"}
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
    </div>
  );
};

export default Home;
