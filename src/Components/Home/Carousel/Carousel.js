import React from 'react';
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'
const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1 className='text-primary'>Best Auto Maintenance</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi tenetur in, modi nam repellendus minus? Recusandae dolorum magnam quos.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>We Provide World Best Digital Service</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio qui, sit error inventore reiciendis. Modi cumque dicta cupiditate quod.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Carousel;