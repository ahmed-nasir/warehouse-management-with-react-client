import axios from 'axios';
import { useEffect, useState } from 'react';


const useSingleItem = (id) => {
    
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`https://floating-ravine-13496.herokuapp.com/limitItem/${id}`)
            .then(res=>setItem(res.data))
            
    }, [id,item])
    

    return[item,setItem]
};

export default useSingleItem;