import axios from 'axios';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../../hooks/useSingleItem';

const ItemDetails = () => {
    const { id } = useParams()
    const [item, setItem] = useSingleItem(id)
    console.log(id)
    const { name, img, description, price, quantity } = item;

    const itemReduce = () => {
        console.log('Clicked')
        const reducedQuntity = quantity - 1;

        const url = `https://floating-ravine-13496.herokuapp.com/updateQuntity/${id}`


        axios.put(url, {
            quantity: reducedQuntity
        })
    }
    const handleRestock = (event) => {
        event.preventDefault()
        const restockItem = event.target.restock.value
        if (restockItem > 0) {
            const reducedQuntity = parseInt(quantity) + parseInt(restockItem);

            const url = `https://floating-ravine-13496.herokuapp.com/updateQuntity/${id}`


            axios.put(url, {
                quantity: reducedQuntity
            })
        }
        
    }

    return (
        <div className='container'>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><strong>Quantity: {quantity}</strong></p>
                            <p className="card-text"><strong>Price: ${price}</strong></p>

                            <div className=''>
                                <button className='btn btn-primary m-3 '>Manage Inventory</button>
                                <button className='btn btn-primary m-3' onClick={itemReduce}>Delevery</button>
                            </div>
                            <form onSubmit={handleRestock}>
                                <input className='' type="Number" id="restock" name="restock" placeholder='Quantity' />
                                {/* <input className='' type="submit" value="Restock" /> */}
                                <button className='btn btn-primary m-3'>Restock</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;