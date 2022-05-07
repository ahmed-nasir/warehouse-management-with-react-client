import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]=useAuthState(auth);
    console.log(user.email)
    const [items, setItems] = useState([])
    console.log(items);
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getMyItems();
    }, [user])
    return (
        <div>
            <h1>My Item {items.name}</h1>
            {
                items.map(item=><div>
                    <h1>{item?.name}</h1>
                    <h4>{item?.email}</h4>
                </div>
                )
            }
        </div>
    );
};

export default MyItem;