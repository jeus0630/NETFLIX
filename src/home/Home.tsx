import * as React from "react";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type="movie"></Featured>
    </div>
  );
};

export default Home;
