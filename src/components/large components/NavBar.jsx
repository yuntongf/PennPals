import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import auth from '../../services/AuthService';
import { toastifySuccess } from "../../services/ToastifyServices";

const NavBar = ({ user }) => {

    const doDemo = async () => {
        await auth.login("Guest-Demo", "peaceful-raisin");
        toastifySuccess('🦄 You are all set! Your temp username: "Guest-Demo" Your temp password: "peaceful-raisin"')
        setTimeout(() => {
        window.location = "/MessageBoard";
        }, 5000)
      };

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light ps-5 d-flex justify-content-between">
                <div>
                    <div className='d-flex'>
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
                                    <btn onClick={() => doDemo()} className="btn btn-sm me-2 btn-primary">
                                        <div className='mt-1'> See demo</div>
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

                            <li className="nav-item active">
                                <a className="nav-link" href="https://forms.gle/mLXB6PVA4g51c9HdA"> Feedback</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-around pe-5 nav-item active'>
                    <div className='text-secondary'>
                    Made with ❤️ from Philly
                    </div>
                </div>

            </nav>
        </div>
    );
}


export default NavBar;