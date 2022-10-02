import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light ps-5">
                <Link className="navbar-brand ms-4" to={user ? "/MessageBoard" : "/Login"}>PennPals</Link>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav ">

                        <li className="nav-item active">
                            <Link className="nav-link" to={user ? "/MessageBoard" : "/Login"}> MessageBoard </Link>
                        </li>

                        <li className="nav-item active me-3">
                            <a className="nav-link" href={user ? "/liked" : "/Login"}> Liked </a>
                        </li>

                        <li className='nav-item active me-3' >
                            <btn className='btn btn-sm btn-outline-success p-0' >
                                <Link className="nav-link" to={user ? "/Compose" : "/Login"}>
                                    Compose
                                </Link>
                            </btn>
                        </li>
                        {!user &&
                            <React.Fragment>
                                <btn onClick={() => window.location = "/Login"} className="btn me-2 btn-primary">
                                    see demo
                                </btn>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Register"> Register</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Login"> Log in</Link>
                                </li>
                            </React.Fragment>}
                        {user &&
                            <React.Fragment>
                                <li className="nav-item active">
                                    <Link className="nav-link" to={window.location}> <div>{user.username}</div></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Logout"> Log out</Link>
                                </li>
                            </React.Fragment>}
                    </ul>
                </div>

            </nav>
        </div>
    );
}


export default NavBar;