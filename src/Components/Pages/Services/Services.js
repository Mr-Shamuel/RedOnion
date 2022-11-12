import React from 'react';

import logo1 from '../../../images/icons/Group 204.png';
import logo2 from '../../../images/icons/Group 1133.png';
import logo3 from '../../../images/icons/Group 245.png';
import service1 from '../../../images/service1.png'
import service2 from '../../../images/service2.png'
import service3 from '../../../images/service3.png'
import Service from '../Service/Service';
import './Services.css'

const serviceData = [
    {
        id: 1,
        name: "Fast Delevery",
        logo: logo1,
        image: service1,
        description: 'Keep your systems in sync with sutomated web hook based notifications each time link is paid and how we dream about future.'
    },
    {
        id: 2,
        name: "A Good Auto Responser",
        logo: logo2,
        image: service2,
        description: 'Keep your systems in sync with sutomated web hook based notifications each time link is paid and how we dream about future.'
    },
    {
        id: 3,
        name: "Home Delevery",
        logo: logo3,
        image: service3,
        description: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about future.'
    }

]

const Services = () => {
    return (
        <div className='  servicesContainer py-5 my-4 '>
            <h1 className='text-center'> Services</h1>
            <div className="title container pb-5">
                <h3 >Why you choose us</h3>
                <h6>Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</h6 >
            </div>
            <div className="services  ">
                <div className="row  ">
                    {
                        serviceData.map(service => <Service key={service.id} service={service}> </Service>)
                    }
                </div>
            </div>


        </div >
    );
};

export default Services;