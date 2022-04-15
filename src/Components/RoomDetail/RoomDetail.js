import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RoomDetail = () => {
    const { roomId } = useParams();
    return (
        <div>
            <div className='text-center'>
                <h2>Room detail:{roomId}</h2>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default RoomDetail;