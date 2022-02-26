import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import * as React from "react";
import "./list.scss";

interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
  return (
    <div className="list">
      <em className="list-title">Continue to watch</em>
      <div className="wrapper">
        <ArrowBackIosOutlined></ArrowBackIosOutlined>
        <div className="container"></div>
        <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
      </div>
    </div>
  );
};

export default List;
