import * as React from 'react';
import { useState, useEffect } from 'react';
import "./lists.scss";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getList } from '../../redux/movieListSlice';
import { deleteLists, getLists } from '../../redux/listsSlice';
interface IProductsProps {
}


const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const rows = useSelector((state: RootState) => state.lists.lists);

    useEffect(() => {

        dispatch(getLists());

        return () => {

        }

    }, []);

    const deleteHandler = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const target = e.target;

        if (target instanceof SVGSVGElement) {

            const id = target.dataset.id;

            id && dispatch(deleteLists(id));
        }
    }

    const columns: GridColDef[] = [
        { field: "_id", headerName: 'ID', width: 90 },
        {
            field: "title", headerName: 'Title', width: 200, renderCell: (params) => (
                <div className='product-list-user'>
                    {params.row.title}
                </div>
            ),
        },
        { field: "genre", headerName: 'Genre', width: 200 },
        { field: "type", headerName: 'Type', width: 120 },
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => (
                <>
                    <Link to={`/list/${params.row.id}`} state={params.row}>
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
                rows[0]?._id && (
                    <div className="product-list">
                        <DataGrid rows={rows} disableSelectionOnClick columns={columns} checkboxSelection pageSize={8} />
                    </div>
                )
            }
        </>
    );
};

export default Products;
