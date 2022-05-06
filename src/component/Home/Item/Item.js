import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    const navigate = useNavigate();

    const { _id, name, img, description,quantity,price } = product;
    // console.log(_id)

    return (
        <div className='g-3 col-sm-12 col-md-4 col-lg-4'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                    Quantity:{quantity}
                    </Card.Text>
                    <Card.Text>
                    Price:{price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/itemDetails/${_id}`)}>Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;