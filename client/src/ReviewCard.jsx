import React from 'react';
import './ReviewCard.css'

function genRating(rating){
  let rat=[];
  for (let j = 0; j <rating; j++) rat.push(<i key={j} className="bi bi-star-fill pe-2" style={{color:"#FFD700"}}></i>)
  return rat;
}

export default function ReviewCard({review}) {
  return(
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
        <div className="review-item">
            <div className="card-body text-white review-item-front text-start pt-5 ps-4">
                <h4 className="card-title ms-2 ps-1 text-truncate">{review.name}</h4>
                <h5 className="card-text my-2">{genRating(review.rating)}</h5>
                <h5 className="card-text my-2 text-truncate">{review.title}</h5>
                <p className="card-text my-2 px-0 text-secondary text-truncate fst-italic" style={{fontWeight:500}}>email: {review.email}</p>
                <p className="card-text my-2 px-0 text-secondary text-truncate fst-italic" style={{fontWeight:500}}>reviewed on: {new Date(review.reviewed).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour12: false,
                    hour: 'numeric',
                    minute: 'numeric'
                  })}
                </p>
                {/* <p className="card-text my-2 px-0"><i>reviewed on: {new Date(review.reviewed).toLocaleString()}</i></p> */}
                <p className="card-text text-end me-0 my-2" style={{color:"dodgerblue"}}>{'view review→'}</p>
            </div>
            <div className="card-body text-white review-item-back">
                <h5 className="card-title my-2 text">Review</h5>
                <p className="card-text text-break">{review.review}</p>
            </div>
        </div>
      </div>
    </>
    )
}