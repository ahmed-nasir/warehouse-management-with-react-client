import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './items.css'
const Items = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // 
        // fakedata.json
        fetch('http://localhost:5000/limitItem')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [products])
    return (
        <div className='container'>
            <h2>Items Section</h2>
            <div className='row justify-content-center'>
                {
                    products.map(product => <Item key={product._id} product={product}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;