import React from 'react';
import car from "../assets/white-car.png";
import './about.css'; // Make sure this path is correct

const About = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={car} alt="Car"/>

                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">#1 WHY US ?</h1>
                        <p className="mb-4">We are the first company to host on-demand, online self-drive vehicle rental service in Bhopal, India. We offer car at an introductory price with a min billing cycle of 24 hrs with a maximum range per day.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Renting a vehicle is easy with us</p>
                        <p><i className="fa fa-check text-primary me-3"></i>24/7 vehicle Support</p>
                        <p><i className="fa fa-check text-primary me-3"></i>we have provided vehicles all over cities.</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="/">Read More </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
