import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';


const ManageItem = () => {
    const [items, setItems] = useItems()
    const navigate = useNavigate();

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
                <table class="table table-striped align-middle text-center">
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

export default ManageItem;