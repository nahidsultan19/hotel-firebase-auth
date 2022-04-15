import React from 'react';
import service1 from '../../../images/Services/room.jpg';
import service2 from '../../../images/Services/clean.jpg';
import service3 from '../../../images/Services/food.jpg';
import service4 from '../../../images/Services/gym.jpg';
import Service from '../Service/Service';


const services = [
    { id: 1, services: 'Beautiful room', img: service1 },
    { id: 1, services: 'All time clean', img: service2 },
    { id: 3, services: 'Healthy food', img: service3 },
    { id: 4, services: 'We provide gym', img: service4 },
]


const Services = () => {
    return (
        <div className='container' id='services'>
            <h2 className='text-primary text-center p-5'>Our Services</h2>
            <div className='row mb-3'>
                {services.map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;