import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {

    const [userServices,setUserServices] = useState([])
    useEffect(() => {
      fetch('https://immense-beyond-89177.herokuapp.com/services')
      .then(res =>res.json())
      .then(data=>setUserServices(data))

    },[])

    return (
        <section className='row justify-content-center mt-5 mb-5'>
            <h2 className='text-danger text-center mb-2'>Our Services</h2>
            {
                userServices.map(service=> <Service service={service}/>)
            }
        </section>
    );
};

export default Services;