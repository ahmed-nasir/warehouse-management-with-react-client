import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'
const Items = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        // http://localhost:5000/item
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           setProducts(data);
        })
    },[])
    return (
        <div className='container'>
            <h2>Items Section</h2>
            <div className='row justify-content-center gap-3'>
            {
                products.map(product=><Item key={product.id} product={product}></Item>)
            }
            </div>
        </div>
    );
};

export default Items;