import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Dashboard/Dashboard';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        // const formData = new FormData()
        // const email=data
        console.log(data);
        // formData.append('email', info.email);

        fetch('https://immense-beyond-89177.herokuapp.com/dashboard/addAdmin', {
            method: 'POST',
           headers: {'Content-Type':'Application/json'},
            body:JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        
              <section  className="container-fluid row">
            <Dashboard/>
            <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Admin</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="col-md-6">
                                                    <div class="form-group"> <label for="form_company">Enter Your Email*</label> <input id="form_company" {...register("email")} type="text"  class="form-control"  required="required" /> </div>
                                                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    
    );
};

export default AddAdmin;