import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { getRandomList } from "../../redux/listSlice";
import { AppDispatch, RootState } from "../../redux/store";
import "./home.scss";
interface IHomeProps {
  type?: string;
}

const Home: React.FunctionComponent<IHomeProps> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const lists = useSelector((state: RootState) => state.list);
  const { genre } = useSelector((state: RootState) => state.genre);

  useEffect(() => {
    dispatch(getRandomList({
      type,
      genre
    }));

    return () => {

    }
  }, [type, genre])

  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type={type}></Featured>
      {
        lists[0]._id &&
        lists.map(list => {
          return (
            <List key={list._id} list={list}></List>
          )
        })
      }

    </div>
  );
};

export default Home;
