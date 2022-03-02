import * as React from 'react';
import { useState } from 'react';
import "./products.scss";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface IProductsProps {
}

const rows: GridRowsProp = [
    {
        id: 1,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 2,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 3,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 4,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 5,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 6,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 7,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 8,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 9,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
    {
        id: 10,
        name: "Apple Airpods",
        img:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        stock: 123,
        status: "active",
        price: "$120.00",
    },
];

const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const [data, setData] = useState<GridRowsProp>(rows);

    const handleClick = (id: number): void => {
        setData(data.filter((row) => row.id !== id));
    }

    const columns: GridColDef[] = [
        { field: "id", headerName: 'ID', width: 90 },
        {
            field: "product", headerName: 'Product', width: 200, renderCell: (params) => (
                <div className='product-list-user'>
                    <img src={params.row.img} alt="" className='product-list-img' />
                    {params.row.name}
                </div>
            ),
        },
        { field: "stock", headerName: 'Stock', width: 200 },
        { field: "status", headerName: 'Status', width: 120 },
        {
            field: "price", headerName: 'Price', width: 160
        },
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => (
                <>
                    <Link to={`/product/${params.row.id}`}>
                        <button className="product-list-edit">Edit</button>
                    </Link>
                    <DeleteOutline className='product-list-delete' onClick={() => handleClick(params.row.id)}></DeleteOutline>
                </>
            )
        }
    ];

    return (

        <div className="product-list">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} checkboxSelection pageSize={8} />
        </div>
    );
};

export default Products;
