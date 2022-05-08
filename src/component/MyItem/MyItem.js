import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getMyItems();
    }, [user])
    // Item delete
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are You sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })
        }
    }
    return (
        <div className='container'>
            <div className='table-responsive'>
                <table className="table table-striped align-middle ">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">price</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Mange</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr>
                                <th scope="row">{item._id}</th>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.supplier}</td>
                                <td>
                                    <button onClick={() => navigate(`/itemDetails/${item._id}`)}>Update</button>
                                    <button className='m-2' onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;