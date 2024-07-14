import './Navbar.css';
import Signup from './Signup';
import Signin from './Signin';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navbar({ isAuth, setIsAuth }) {

  const signOut = () => {
    setIsAuth({name:'', email:'', auth:false});
  }

  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenSignin = () => {
    setOpenSignin(true);
    setOpenSignup(false);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
    setOpenSignin(false);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container-fluid m-3">
          <NavLink className="navbar-brand" to="/">TechySoftware</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            {
              (isAuth.auth)?
                <Button variant="primary" onClick={signOut}>Sign Out</Button>
                :
                <Button variant="primary" onClick={handleOpenSignin}>Sign In</Button>
            }
          </div>
        </div>
      </nav>
      <Signin show={openSignin} handleClose={handleCloseSignin} openSignup={handleOpenSignup} setIsAuth={setIsAuth} />
      <Signup show={openSignup} handleClose={handleCloseSignup} openSignin={handleOpenSignin} />
    </>
  );
}
