import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { img, services } = props.service;
    return (
        <div className='g-4 col-dm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem', height: '400px' }} className='mx-auto'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{services}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;