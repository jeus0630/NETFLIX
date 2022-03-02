import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie } from "../../redux/movieSlice";
import { AppDispatch, RootState } from "../../redux/store";
import "./featured.scss";

interface IFeaturedProps {
  type?: string;
}

const Featured: React.FunctionComponent<IFeaturedProps> = ({ type }) => {

  const dispatch = useDispatch<AppDispatch>();
  const movie = useSelector((state: RootState) => state.movie);

  useEffect(() => {

    dispatch(getRandomMovie(type));

    return () => {

    }
  }, [type])

  console.log(movie);


  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={movie.img}
        alt=""
      />
      <div className="info">
        <img
          src={movie.imgTitle}
          alt=""
        />
        <span className="desc">
          {movie.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow></PlayArrow>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined></InfoOutlined>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
