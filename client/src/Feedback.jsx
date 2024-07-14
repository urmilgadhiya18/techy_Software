import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

export default function Feedback({ isAuth }) {

  const [feedback, setFeedback] = useState({title: '', rating: '', review: ''});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFeedback(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isAuth.auth){
      axios.post('http://localhost:4004/review',{name:isAuth.name, email:isAuth.email, title:feedback.title, rating:feedback.rating, review:feedback.review})
      .then(result=>{
        setError('')
        setFeedback({title: '', rating: '', review: ''});
      })
      .catch(err => {
        setError('An error occurred. Please try again.');
        console.log(err);
      });
    }
    else{
      setError('Please signin to provide your feedback.')
    }
  };

  return (
    <div className="col-lg-6 col-md-10 my-5">
      <div className="card shadow-sm rounded-4">
        <div className="card-body text-white text-start p-4" style={{backgroundColor: "#242424"}}>
          <h2 className="card-title mb-4 text-center">Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Title your review</label>
              <input type="text" maxLength={21} className="form-control" id="title" value={feedback.title} onChange={handleChange} placeholder="What's most important to know?" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating</label>
              <select className="form-select" id="rating" value={feedback.rating} onChange={handleChange} required>
                <option value="" disabled>Choose...</option>
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">Review</label>
              <textarea className="form-control" id="review" rows="4" placeholder="What did you like or dislike? What did you use this website for?" value={feedback.review} onChange={handleChange} required></textarea>
            </div>
            {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}