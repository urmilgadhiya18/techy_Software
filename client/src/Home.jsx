import './Home.css'; 
import React from 'react';
import dev from './assets/devOps.png'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container pt-5">
      <section className="hero-section mt-4 pb-5">
        {/* {(window.innerWidth>767)?<div className="container p-5"></div>:""} */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5">
              <h1 className="hero-title">Welcome to TechySoftware</h1>
              <p className="hero-subtitle">Building Tomorrow's Technology Today</p>
              <NavLink to="/about" className="btn btn-primary btn-lg mt-3">Learn More</NavLink>
            </div>
            <div className="col-md-6">
              <img src={dev} alt="Homepage" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section bg-light p-5 pt-1">
        <div className="container mt-1">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item text-center">
                <i className="bi bi-speedometer2 feature-icon"></i>
                <h3 className="feature-title">Fast Performance</h3>
                <p className="feature-description">Optimized software solutions for speed and efficiency.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item text-center">
                <i className="bi bi-gear-wide-connected feature-icon"></i>
                <h3 className="feature-title">Reliable Technology</h3>
                <p className="feature-description">Using the latest technology to ensure reliability.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item text-center">
                <i className="bi bi-shield-lock feature-icon"></i>
                <h3 className="feature-title">Secure Solutions</h3>
                <p className="feature-description">Prioritizing security in all our software products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
