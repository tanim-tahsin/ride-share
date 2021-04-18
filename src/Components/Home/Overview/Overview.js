import React from 'react';
import car from '../../../images/car.png'
import css from './Overview.css'
const Overview = () => {

    return (
        <section className="row tanim">
           <div className="col-md-5 img-magnifier-container">
               <img  id="myimage" className="img-fluid" src={car} alt=""/>
            </div> 
               <div className="col-md-6">
                   <h1>Professional Car Repairs <br/>
                        and Maintenance</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur, pulvinar rhoncus risus. Fusce vel rutrum mi. Suspendisse pretium tellus eu ipsum pellentesque convallis. Ut mollis libero eu massa imperdiet faucibus vitae non diam. Sed egestas felis libero, ut suscipit nisl varius non. Proin eget suscipit nulla. Nulla facilisi. In hac habitasse platea dictumst.</p>
                        <div className="row counter-item text-center  ">
                           <div className="col-md-4 col-4 ">
                               <h3 >312</h3>
                               <h5>Project Done</h5>
                           </div>
                           <div className="col-md-4 col-4 ">
                               <h3>873</h3>
                               <h5>Happy Client</h5>
                           </div>
                           <div className="col-md-4 col-4  ">
                               <h3>435</h3>
                               <h5>Our Employees</h5>
                           </div>
                        </div>
               <button class="btn btn-danger">Read More</button>

               </div>
        </section>
        
    );
};

export default Overview;