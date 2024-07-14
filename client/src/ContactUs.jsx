import React from 'react';

export default function ContactUs() {
  return(
    <div className="col-lg-6 col-md-10 my-5">
      <div className="card shadow-sm h-100 rounded-4">
        <div className="card-body text-white text-start p-4 pb-3" style={{backgroundColor:"#000000c4"}}>
          <h2 className="card-title text-center mb-4">Contact Us</h2>
          <ul className="list-unstyled">
            <li className="mb-3 text-truncate">
              <i className="bi bi-geo-alt pe-2"></i>
              <span>Techy Software Pvt Ltd, opp. Nirma Uni, Ahmedabad, Gujarat, India</span>
            </li>
            <li className="mb-3 text-truncate">
              <i className="bi bi-envelope-at pe-2"></i>
              <span>info@techysoftware.com</span>
            </li>
            <li className="mb-3 text-truncate">
              <i className="bi bi-telephone pe-2"></i>
              <span>+91 1234 567 890</span>
            </li>
            <li className="text-truncate">
              <i className="bi bi-clock pe-2"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
          <div className="embed-responsive embed-responsive-21by9 pt-2">
            <iframe
              className="embed-responsive-item rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7338.273306745467!2d72.53835905663547!3d23.128679786949533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f45125167%3A0x876cb1cb23c25bdb!2sNirma%20University!5e0!3m2!1sen!2sin!4v1720859616938!5m2!1sen!2sin"
              style={{ border: 0, width: '100%', height: '199px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}