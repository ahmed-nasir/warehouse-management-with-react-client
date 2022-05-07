import { useEffect, useState } from 'react';


const useSingleItem = (id) => {
    
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/limitItem/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])

    return[item,setItem]
};

export default useSingleItem;