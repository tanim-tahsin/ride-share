import React from 'react';
import css from './Testimonial.css'
const Testimonial = ({userReview}) => {
    return (
        <div class="card mx-2 mb-3">
        <div class="card-body">
            <h4 class="card-title"><img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"/></h4>
            <div class="template-demo">
                <p>{userReview.review}</p>
            </div>
            <hr/>
            <div class="row">
                <div class="col-sm-2"> <img class="profile-pic" src="https://img.icons8.com/bubbles/100/000000/edit-user.png"/> </div>
                <div class="col-sm-10">
                    <div class="profile">
                        <h4 class="cust-name">{userReview.name}</h4>
                        <p class="cust-profession">{userReview.company}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Testimonial;