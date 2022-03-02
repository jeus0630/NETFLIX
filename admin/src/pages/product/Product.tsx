import { Publish } from '@mui/icons-material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import "./product.scss";

interface IProductProps {
}

const Product: React.FunctionComponent<IProductProps> = (props) => {

    const navigate = useNavigate();

    const data = [
        {
            name: "Jan",
            "Sales": 4000,
        },
        {
            name: "Feb",
            "Sales": 3000,
        },
        {
            name: "Mar",
            "Sales": 4000,
        }
    ];

    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="product-title">Product</h1>
                <button className="product-add-button" onClick={() => { navigate("/new-product") }}>Create</button>
            </div>
            <div className="product-top">
                <div className="product-top-left">
                    <Chart propData={data} dataKey={"Sales"} title="Sales Performance"></Chart>
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-info-img" />
                        <span className="product-name">Apple Airpods</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">sales:</span>
                            <span className="product-info-value">5123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">active:</span>
                            <span className="product-info-value">yes</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">in stock</span>
                            <span className="product-info-value">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Apple Airpods' />
                        <label htmlFor="">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-upload-img" />
                            <label htmlFor="file">
                                <Publish></Publish>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="product-button">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;
