import React from 'react';
import './search.css'; // Make sure this path is correct

const Search = () => {
    return (
        <div className="container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
            <div className="container">
                <div className="row g-2">
                    <div className="search col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Category</option>
                                    <option value="1">Car</option>
                                    <option value="2">Scooty</option>
                                    <option value="3">Bike</option>
                                    <option value="4">Cycle</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Pick-up Location" />
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Drop-off Location" />
                            </div>
                            <div className="col-md-4">DATE:
                                <input type="date" className="form-control border-0 py-3" />
                            </div>
                            <div className="col-md-4">FROM:
                                <input type="time" className="form-control border-0 py-3" />
                            </div>
                            <div className="col-md-4">TO:
                                <input type="time" className="form-control border-0 py-3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
