import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    return (
        <div className="serviceCard px-5 col-sm-12 col-md-3">
            <div className="card  " style={{ width: '24rem' }} >
                <img src={service.image} className="card-img-top img-fluid  " alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><span><img className='px-2' src={service.logo} alt="" /></span>{service.name}</h5>
                    <p className="card-text"> {service.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;