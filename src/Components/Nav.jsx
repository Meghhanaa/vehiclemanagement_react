import React, { useState } from 'react';
import './Nav.css';

function Nav() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className='megh-nav'>
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                    <a className="navbar-brand d-flex align-items-center text-center" href="#">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src="src/assets/logo-1.png" alt="Icon" style={{ width: '30%', height: '30%', borderRadius: '50%', borderStyle: 'dashed', borderColor: '#20c997', padding: '10px' }} />
                        </div>
                        <h1 style={{ fontWeight: '700', color: '#00B98E', fontFamily: "'Inter', sans-serif", fontSize: 'calc(1.375rem + 1.5vw)', marginLeft: '-80px' }}>VEHICLE-HUB</h1>
                    </a>
                    <button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#" className={`nav-link megh-02 ${window.location.pathname === '/' ? 'active' : ''}`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={`nav-link megh-02 ${window.location.pathname === '/about' ? 'active' : ''}`}>About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={`nav-link megh-02 ${window.location.pathname === '/vehicles' ? 'active' : ''}`}>Vehicles</a>
                            </li>
                            {/* Example Dropdown Menu
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle megh-02" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vehicles
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Vehicle 1</a></li>
                                    <li><a className="dropdown-item" href="#">Vehicle 2</a></li>
                                    <li><a className="dropdown-item" href="#">Vehicle 3</a></li>
                                </ul>
                            </li>
                            */}
                            <li className="nav-item">
                                <a href="#" className={`nav-link megh-02 ${window.location.pathname === '/book-now' ? 'active' : ''}`}>Book Now</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={`nav-link megh-02 ${window.location.pathname === '/contact' ? 'active' : ''}`}>Contact</a>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary px-3 d-none d-lg-flex">Add Vehicles</a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav;



// import React, { useState } from 'react';
// import './Nav.css';

// function Nav() {
//     const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//     return (
//         <div className='megh-nav'>
//             <div className="container-fluid nav-bar bg-transparent">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
//                     <a className="navbar-brand d-flex align-items-center text-center" href="#">
//                         <div className="icon p-2 me-2">
//                             <img className="img-fluid" src="src/assets/logo-1.png" alt="Icon" style={{ width: '30%', height: '30%', borderRadius: '50%', borderStyle: 'dashed', borderColor: '#20c997', padding: '10px' }} />
//                         </div>
//                         <h1 style={{ fontWeight: '700', color: '#00B98E', fontFamily: "'Inter', sans-serif", fontSize: 'calc(1.375rem + 1.5vw)', marginLeft: '-80px' }}>VEHICLE-HUB</h1>
//                     </a>
//                     <button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
//                         <div className="navbar-nav ms-auto">
//                             <a href="#" className="megh-02 nav-item nav-link active">Home</a>
//                             <a href="#" className="megh-02 nav-item nav-link">About</a>
//                             <a href="#" className="megh-02 nav-item nav-link">Vehicles</a>
//                             {/* <div className="nav-item dropdown">
//                                 <a href="#" className="megh-02 nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Vehicles
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                     <li><a className="dropdown-item" href="#">Vehicle 1</a></li>
//                                     <li><a className="dropdown-item" href="#">Vehicle 2</a></li>
//                                     <li><a className="dropdown-item" href="#">Vehicle 3</a></li>
//                                 </ul>
//                             </div> */}
//                             <a href="#" className="megh-02 nav-item nav-link">Book Now</a>
//                             <a href="#" className="megh-02 nav-item nav-link">Contact</a>
//                         </div>
//                         <button href="#" className="btn btn-primary px-3 d-none d-lg-flex">Add Vehicles</button>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// }

// export default Nav;




// /* Nav.css */
// .megh-nav{
//     margin: 0;
//     padding: 0;
// }

// .container-fluid.nav-bar {
//     background-color: transparent;
// }

// .navbar {
//     box-shadow: 0 0 30px rgba(0, 0, 0, .08);
// }


// .navbar-brand {
//     display: flex;
//     align-items: center;
//     text-align: center;
// }

// .navbar-brand .icon img {
//     width: 30%;
//     height: 30%;
//     border-radius: 50%;
//     border-style: dashed;
//     border-color: #20c997;
//     padding: 10px;
// }

// .navbar-brand h1 {
//     font-weight: 700;
//     color: #00B98E;
//     font-family: 'Inter', sans-serif;
//     font-size: calc(1.375rem + 1.5vw);
//     margin-left: -80px;
// }

// .navbar-toggler {
//     border: none;
// }

// .navbar-toggler-icon {
//     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
// }

// .navbar-collapse {
//     justify-content: flex-end;
// }

// .navbar-nav .nav-item {
//     margin: 0;
//     padding: 0;
// }

// .navbar-nav .nav-link {
//     margin-right: 30px;
//     padding: 25px 0;
//     color: #333;
//     font-size: 15px;
//     text-transform: uppercase;
//     font-weight: 500;
//     outline: none;
// }

// .navbar-nav .nav-link:hover,
// .navbar-nav .nav-link.active {
//     color: #00B98E;
// }

// .navbar-nav .nav-link:hover,
// .navbar-nav .nav-link.active {
//     color: #00B98E; /* Your desired hover and active color */
// }


// .navbar-nav .dropdown-menu {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     z-index: 1000;
//     display: none;
//     float: none;
//     min-width: 10rem;
//     padding: .5rem 0;
//     margin: .125rem 0 0;
//     font-size: 1rem;
//     color: #212529;
//     text-align: left;
//     list-style: none;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid rgba(0,0,0,.15);
//     border-radius: .25rem;
// }

// .navbar-nav .dropdown-menu.show {
//     display: block;
// }

// .navbar-nav .dropdown-item {
//     padding: .25rem 1.5rem;
//     clear: both;
//     font-weight: 400;
//     color: #212529;
//     text-align: inherit;
//     white-space: nowrap;
//     background-color: transparent;
//     border: 0;
// }

// .navbar-nav .dropdown-item:hover,
// .navbar-nav .dropdown-item:focus {
//     color: #16181b;
//     text-decoration: none;
//     background-color: #f8f9fa;
// }

// .btn {
//     background-color: #00B98E;
//     color: #fff;
// }

// .btn:hover {
//     background-color: #008c6e;
//     color: #fff;
// }

// @media (max-width: 991.98px) {
//     .navbar-nav .nav-link {
//         margin-right: 0;
//         padding: 10px 0;
//     }

//     .navbar-nav {
//         border-top: 1px solid #EEEEEE;
//     }

//     .navbar-nav .dropdown-menu {
//         position: static;
//         float: none;
//     }
// }


// .btn {
//     background-color: #00B98E; /* This is the normal state color */
//     color: #fff;
//     transition: background-color 0.3s; /* Smooth transition for color change */
// }

// .btn:hover {
//     background-color: #008c6e; /* This is the hover state color */
//     color: #fff;
// }
