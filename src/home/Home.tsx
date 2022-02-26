import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
