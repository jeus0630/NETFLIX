import * as React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type="movie"></Featured>
      <List></List>
    </div>
  );
};

export default Home;
