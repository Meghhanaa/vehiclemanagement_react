import React from 'react';
import './vehicleowner.css';

const ownersData = [
    {
        id: 1,
        name: "John Doe",
        designation: "Owner",
        imgSrc: "./src/assets/team-1.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        designation: "Owner",
        imgSrc: "./src/assets/team-1.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        id: 3,
        name: "Michael Brown",
        designation: "Owner",
        imgSrc: "./src/assets/team-1.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        id: 4,
        name: "Emily Johnson",
        designation: "Owner",
        imgSrc: "./src/assets/team-1.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    }
];

const VehicleOwner = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-3">Vehicles Owners</h1>
                </div>
                <div className="row g-4">
                    {ownersData.map(owner => (
                        <div className="col-lg-3 col-md-6 wow fadeInUp" key={owner.id}>
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src={owner.imgSrc} alt={owner.name} />
                                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href={owner.social.facebook}><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href={owner.social.twitter}><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href={owner.social.instagram}><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">{owner.name}</h5>
                                    <small>{owner.designation}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VehicleOwner;
