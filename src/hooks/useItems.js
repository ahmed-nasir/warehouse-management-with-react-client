import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://floating-ravine-13496.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return[items,setItems]
};

export default useItems;