import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../../hooks/useSingleItem';

const ItemDetails = () => {
    const { id } = useParams()
    const [item, setItem] = useSingleItem(id)
    console.log(item)
    const { _id, name, img, description, price, quantity } = item;
    return (
        <div className='container'>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text"><strong>Quantity: {quantity}</strong></p>
                            <p class="card-text"><strong>Price: ${price}</strong></p>

                            <div className=''>
                                <button className='btn btn-primary me-5'>Manage Inventory</button>
                                <button className='btn btn-primary'>Delevery</button>
                            </div>
                            <input type="email" id="restock" placeholder='amount' /> <button className='btn btn-primary'>Restock</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;