import React from 'react';
import { Link } from 'react-router-dom';
import css from './Service.css'
const Service = ({service}) => {
    const style = {
        width:"20rem",
        height:'26rem'

}
    return (
        <div className="col-md-3 mx-2">
         <div class="card" style={style} >
 <div class="img-hover-zoom">
 <img src={service.imageURL} class="card-img-top  " alt="..."/>
 </div>
  <div class="card-body">
    <h5 class="card-title">{service.title}</h5>
    <p class="card-text">{service.description}</p>
    <Link to={`/dashboard/book/${service._id}`} class="btn btn-danger">Buy Now</Link>
  </div>
</div>   
        </div>
    );
};

export default Service;