import * as React from 'react';
import "./newMovie.scss";

interface INewProductProps {
}

const NewProduct: React.FunctionComponent<INewProductProps> = (props) => {

    

    return (
        <div className="new-movie">
            <h1 className="add-movie-title">New Movie</h1>
            <form className="add-movie-form">

                <div className="add-movie-item">
                    <label>Image</label>
                    <input
                        type="file"
                        id="img"
                    />
                </div>
                <div className="add-movie-item">
                    <label>Title Image</label>
                    <input
                        type="file"
                        id="img-title"
                    />
                </div>
                <div className="add-movie-item">
                    <label>Thumbnail image</label>
                    <input
                        type="file"
                        id="imgSm"
                    />
                </div>
                <div className="add-movie-item">
                    <label>Title</label>
                    <input type="text" placeholder='John Wick' />
                </div>
                <div className="add-movie-item">
                    <label>Description</label>
                    <input type="text" placeholder='Description' />
                </div>
                <div className="add-movie-item">
                    <label>Year</label>
                    <input type="text" placeholder='Year' />
                </div>
                <div className="add-movie-item">
                    <label>Genre</label>
                    <input type="text" placeholder='Genre' />
                </div>
                <div className="add-movie-item">
                    <label>Duration</label>
                    <input type="text" placeholder='Duration' />
                </div>
                <div className="add-movie-item">
                    <label>Limit</label>
                    <input type="text" placeholder='Limit' />
                </div>
                <div className="add-movie-item">
                    <label>Is Series?</label>
                    <select name="active" id="is-series">
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="add-movie-item">
                    <label>Trailer</label>
                    <input type="file" />
                </div>
                <div className="add-movie-item">
                    <label>Video</label>
                    <input type="file" />
                </div>
                <button className="add-movie-button">
                    Create
                </button>
            </form>
        </div>
    );
};

export default NewProduct;
