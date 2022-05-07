import axios from 'axios';
import { useEffect, useState } from 'react';


const useSingleItem = (id) => {
    
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/limitItem/${id}`)
            .then(res=>setItem(res.data))
            
    }, [id,item])
    

    return[item,setItem]
};

export default useSingleItem;