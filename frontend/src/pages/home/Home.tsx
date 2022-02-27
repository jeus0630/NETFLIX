import * as React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
interface IHomeProps {
  type?: string;
}

const Home: React.FunctionComponent<IHomeProps> = ({ type }) => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type={type}></Featured>
      <List></List>
    </div>
  );
};

export default Home;
