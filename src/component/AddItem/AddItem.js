import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user]=useAuthState(auth);
    const email = user.email;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/addItem`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            // reset input field
        })
        toast("Item successfully Added.")
    };
    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
            <h1 className='text'>Please Add a service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Email' value={user?.email} readOnly {...register("email")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number"  {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                
                <input type="submit" value="Add Service" />
            </form>
        </div>
        </div>
    );
};

export default AddItem;