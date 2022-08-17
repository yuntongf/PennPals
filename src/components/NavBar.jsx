import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ps-5">
                <Link className="navbar-brand ms-4" to="/MessageBoard">AMB</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/MessageBoard"> MessageBoard </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle disabled" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Catagories
                            </Link>
                        
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">STEM</Link>
                                <Link className="dropdown-item" to="#">Social Sciences</Link>
                                <Link className="dropdown-item" to="#">Humanities</Link>
                                <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Business</Link>
                                </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link disabled" to="MessageBoard">Liked</Link>
                        </li>
                    </ul>

                    <form className="form-inline col-4 my-5 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    </form>

                    <button className="m-2 btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </div>
            </nav>
        </div>
        );
    }
}
 
export default NavBar;