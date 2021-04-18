import React from 'react';
import Carousel from '../Carousel/Carousel';
import ContactForm from '../ContactForm/ContactForm';
import DoorStep from '../DoorStep/DoorStep';
import Emergency from '../Emergency/Emergency';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Overview/>
            <Services/>
           <DoorStep/>
            <Emergency/>
            <Testimonials/>
            <ContactForm/>
            <Footer/>


        </div>
    );
};

export default Home;