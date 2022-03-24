import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setGenre } from "../../redux/genreSlice";
import { getRandomMovie } from "../../redux/movieSlice";
import { AppDispatch, RootState } from "../../redux/store";
import "./featured.scss";

interface IFeaturedProps {
  type?: string;
}

const Featured: React.FunctionComponent<IFeaturedProps> = ({ type }) => {

  const dispatch = useDispatch<AppDispatch>();
  const movie = useSelector((state: RootState) => state.movie);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const navigate = useNavigate();

  useEffect(() => {

    dispatch(getRandomMovie(type));


    return () => {

    }
  }, [type])

  const genreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.options[e.target.selectedIndex].value;
    dispatch(setGenre(val));
  }

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={genreHandler}>
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
        src={movie.img || '/images/gray-box.jpeg'}
        alt=""
      />
      <div className="info">
        <img
          src={movie.imgTitle || undefined}
          alt=""
        />
        <span className="desc">
          {movie.desc}
        </span>
        <div className="buttons">
          <Link to="/watch" state={trailer}>
            <button className="play">
              <PlayArrow></PlayArrow>
              <span>Play</span>
            </button>
          </Link>
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
