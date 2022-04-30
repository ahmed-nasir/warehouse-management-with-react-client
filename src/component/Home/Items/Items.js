import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'
const Items = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           setProducts(data);
        })
    },[])
    return (
        <div className='container'>
            <h2>Items Section</h2>
            <div className='items-container'>
            {
                products.map(product=><Item key={product._id} product={product}></Item>)
            }
            </div>
        </div>
    );
};

export default Items;