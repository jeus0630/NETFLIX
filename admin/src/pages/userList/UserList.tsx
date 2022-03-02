import * as React from 'react';
import { useState } from 'react';
import "./userList.scss";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface IUserListProps {
}


const rows: GridRowsProp = [
    {
        id: 1,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 2,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 3,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 4,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 5,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 6,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 7,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 8,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 9,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
    {
        id: 10,
        username: "Jon Snow",
        avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
    },
];

const UserList: React.FunctionComponent<IUserListProps> = (props) => {

    const [data, setData] = useState<GridRowsProp>(rows);

    const columns: GridColDef[] = [
        { field: "id", headerName: 'ID', width: 90 },
        {
            field: "username", headerName: 'Username', width: 200, renderCell: (params) => (
                <div className='user-list-user'>
                    <img src={params.row.avatar} alt="" className='user-list-img' />
                    {params.row.username}
                </div>
            ),
        },
        { field: "email", headerName: 'Email', width: 200 },
        { field: "status", headerName: 'Status', width: 120 },
        {
            field: "transaction", headerName: 'Transaction Volume', width: 160
        },
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => (
                <>
                    <Link to={`/user/${params.row.id}`}>
                        <button className="user-list-edit">Edit</button>
                    </Link>
                    <DeleteOutline className='user-list-delete' onClick={() => handleClick(params.row.id)}></DeleteOutline>
                </>
            )
        }
    ];

    const handleClick = (id: number): void => {
        setData(data.filter((row) => row.id !== id));
    }

    return (
        <div className="user-list">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} checkboxSelection pageSize={8} />
        </div>
    );
};

export default UserList;
