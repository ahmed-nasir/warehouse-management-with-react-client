import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({product}) => {
    const {id,name,img,description,price}=product;
    console.log(name)

    return (
        <Card style={{ width: '18rem' }} className='col-sm-12 col-md-6 col-lg-4'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {description}
                </Card.Text>
                <Button variant="primary">Update</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;