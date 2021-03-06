import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { useRef, useState, useReducer, useEffect } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

interface IListProps {
  list: {
    content: string[];
    createdAt: string;
    genre: string;
    title: string;
    type: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }
}

type State = {
  slideNumber: {
    toRight: number;
    toLeft: number;
  }
  isMoved: boolean;
  isMoveRight: boolean;
}

type Action = { type: "slideNumber"; payload: { toRight: number; toLeft: number; } } | { type: "isMoved"; payload: boolean; } | { type: "isMoveRight"; payload: boolean; };

type Reducer = (state: State, action: Action) => State;

const initialState: State = {
  slideNumber: {
    toRight: 0,
    toLeft: 0
  },
  isMoved: false,
  isMoveRight: false
}

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "slideNumber":
      return {
        ...state,
        slideNumber: action.payload
      }
    case "isMoved":
      return {
        ...state,
        isMoved: action.payload
      }
    case "isMoveRight":
      return {
        ...state,
        isMoveRight: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

const List: React.FunctionComponent<IListProps> = ({ list }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const x = window.innerWidth;
    const numToRight = (ulRef.current.getBoundingClientRect().width - x) / 230;
    const isMoveRight = numToRight > 0 ? true : false;

    if (isMoveRight) {
      dispatch({ type: "isMoveRight", payload: true });
      dispatch({ type: "slideNumber", payload: { toLeft: 0, toRight: Math.ceil(numToRight) } });
    }

    return () => {

    }
  }, [])

  const ulRef = useRef<HTMLUListElement>(null!);

  const handleClick = (direction: "left" | "right") => {
    const distance = ulRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      dispatch({ type: "slideNumber", payload: { ...state.slideNumber, toLeft: state.slideNumber.toLeft - 1, toRight: state.slideNumber.toRight + 1 } });
      ulRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right") {
      dispatch({ type: "slideNumber", payload: { ...state.slideNumber, toLeft: state.slideNumber.toLeft + 1, toRight: state.slideNumber.toRight - 1 } });
      dispatch({ type: "isMoved", payload: true });
      ulRef.current.style.transform = `translateX(${-230 + distance}px)`
    }

  }

  return (
    <div className="list">
      <em className="list-title">{list.title}</em>
      <div className="wrapper">
        {
          state.isMoved && (
            <ArrowBackIosOutlined className="slider-arrow left" onClick={() => handleClick("left")} style={{ display: state.slideNumber.toLeft > 0 ? "block" : "none" }}></ArrowBackIosOutlined>
          )
        }
        <ul className="container" ref={ulRef}>
          {
            list.content.map((con, idx) => {
              return (
                <ListItem key={idx} index={idx} id={con}></ListItem>
              )
            })
          }
        </ul>
        {
          state.isMoveRight && (
            <ArrowForwardIosOutlined className="slider-arrow right" onClick={() => handleClick("right")} style={{ display: state.slideNumber.toRight > 0 ? "block" : "none" }} ></ArrowForwardIosOutlined>
          )
        }
      </div>
    </div>
  );
};

export default List;
