import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { getList } from "../../redux/listSlice";
import { AppDispatch, RootState } from "../../redux/store";
import "./home.scss";
interface IHomeProps {
  type?: string;
}

const Home: React.FunctionComponent<IHomeProps> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const lists = useSelector<RootState>(state => state.list);

  useEffect(() => {
    dispatch(getList());

    return () => {

    }
  }, [])


  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type={type}></Featured>
      <List></List>
    </div>
  );
};

export default Home;
