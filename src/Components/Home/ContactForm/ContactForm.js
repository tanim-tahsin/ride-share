import React from 'react';
import { useForm } from 'react-hook-form';
import css from './ContactForm.css'
const ContactForm = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const style={
        width: '100%',
        height:' 150px'
    }
    const onSubmit=(data)=>{
        alert('We will Reply You soon')
    }
    return (
        
       <div>
            <h2 className='text-center mb-3 text-secondary'>Feel Free to Contact With Us</h2>
            <div class="container contact-form mt-5">
           
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group perfect">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group perfect">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group perfect">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group perfect">
                            <input type="submit"  name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group perfect">
                            <textarea style={style} name="txtMsg" class="form-control" placeholder="Your Message *"></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
       </div>
    );
};

export default ContactForm;