import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className='container'>
            <div className='row gy-5 mb-5 mt-3'>
                {rooms.map(room => <Room key={room.id} room={room}></Room>)}
            </div>
        </div>
    );
};

export default Rooms;