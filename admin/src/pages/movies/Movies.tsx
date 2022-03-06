import * as React from 'react';
import { useState, useEffect } from 'react';
import "./movies.scss";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getList } from '../../redux/movieListSlice';
interface IProductsProps {
}


const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const rows = useSelector((state: RootState) => state.movies.movies);

    useEffect(() => {

        dispatch(getList());

        return () => {

        }

    }, []);

    const deleteHandler = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const target = e.target;

        if (target instanceof SVGSVGElement) {

            const id = target.dataset.id;

            id && dispatch(deleteMovie(id));
        }
    }

    const columns: GridColDef[] = [
        { field: "_id", headerName: 'ID', width: 90 },
        {
            field: "title", headerName: 'Movie', width: 200, renderCell: (params) => (
                <div className='product-list-user'>
                    <img src={params.row.img} alt="" className='product-list-img' />
                    {params.row.title}
                </div>
            ),
        },
        { field: "year", headerName: 'Year', width: 200 },
        { field: "limit", headerName: 'Limit', width: 120 },
        {
            field: "isSeries", headerName: 'Series', width: 160
        },
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => (
                <>
                    <Link to={`/movie/${params.row.id}`} state={params.row}>
                        <button className="product-list-edit">Edit</button>
                    </Link>
                    <DeleteOutline data-id={`${params.row.id}`} className='product-list-delete' onClick={deleteHandler}></DeleteOutline>
                </>
            )
        }
    ];

    return (
        <>
            {
                rows[0]._id && (
                    <div className="product-list">
                        <DataGrid rows={rows} disableSelectionOnClick columns={columns} checkboxSelection pageSize={8} />
                    </div>
                )
            }
        </>
    );
};

export default Products;
