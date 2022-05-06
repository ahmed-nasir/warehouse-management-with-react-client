import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Items></Items>
            <div className='text-center mt-3'>
                <Link to="/manageItem">
                    <Button variant="primary">Manage All</Button>
                </Link>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;