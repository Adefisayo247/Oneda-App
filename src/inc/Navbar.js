import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/Frame 10.png';

function Navbar() {
return(
    <div className="navbar-dark bg-dark shadow">
        <div className="container">
            <div className="row">
            <div className="col-md-3 my-auto logo">
            <img src={logo} className="float-start" alt="..."/>
                    </div>
                <div className="col-md-9">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <ul class="navbar-nav ms-auto mt-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" class="nav-link active">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contact" class="nav-link active">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        </div>
    </div>
    // <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    //     <div class="container">
    //         <Link to="/" class="navbar-brand">Oneda Web IT</Link>
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
    //             <span class="nabar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse-navbar-collapse" id="navbarSupportedContent">
    //             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    //                 <li class="nav-item">
    //                 <Link to="/" class="nav-link active">Home</Link>
    //                 </li>
    //                 <li class="nav-item">
    //                 <Link to="/about" class="nav-link active">About Us</Link>
    //                 </li>
    //                 <li class="nav-item">
    //                 <Link to="/contact" class="nav-link active">Contact Us</Link>
    //                 </li>
                    
    //             </ul>
    //         </div>

    //     </div>

    // </nav>
)
}

export default Navbar;