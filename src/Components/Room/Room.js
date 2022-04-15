import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Room = (props) => {
    const { id, room, img, description } = props.room;

    const navigate = useNavigate();

    const handleRoomDetail = (id) => {
        navigate(`/room/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-4'>
            <Card>
                <Card.Img variant="top" src={img} className="card-img-top" height={'240px'} />
                <Card.Body>
                    <Card.Title>{room}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => handleRoomDetail(id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Room;