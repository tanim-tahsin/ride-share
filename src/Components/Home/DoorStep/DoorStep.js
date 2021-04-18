import React from 'react';
import doorImg from '../../../images/serviceImg.png'
import pipe from '../../../images/pipe.png'
import engine from '../../../images/engine.png'
import wheel from '../../../images/tyre.png'
import css from './Doorstep.css'
const DoorStep = () => {
    return (
        <div className='container justify-content-center mt-5 tanim row '>
            <div className="col-md-7">
            <h2>Door Step Service</h2>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos corporis nemo aliquid accusantium, nihil dolorum assumenda? Nisi, ipsa ad?</p>
            <div className='row'>
                <div className="col-md-4">
                    <img src={wheel} alt=""/>
                    <h6>Wheel Works</h6>
                </div>
                <div className="col-md-4">
                <img src={engine} alt=""/>
                <h6>Engine Works</h6>
                </div>
                <div className="col-md-4">
                <img src={pipe} alt=""/>
                <h6>Water Service</h6>
                </div>
            </div>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={doorImg} alt=""/>
            </div>
        </div>
    );
};

export default DoorStep;