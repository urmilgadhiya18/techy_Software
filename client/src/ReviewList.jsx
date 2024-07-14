import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

export default function ReviewList(){
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        const fetchFeedback = async () => {
            try {
              const response = await fetch('http://localhost:4004/review');
              if (!response.ok){
                throw new Error('Failed to fetch feedback');
              }
                const data = await response.json();
                setReviews(data);
            } catch (error) {
              console.error(error);
            }
          };

          fetchFeedback();
          // console.log(reviews);
    },[])

    return(
        <>
        <div className="container my-5 py-5">
              <div className="row pt-5">
              <div className="col-md-8 mx-auto text-center text-white">
                <h2 className="pb-0 mb-0 display-4 text-white">Reviews</h2>
              </div>
            </div>
            <div className="row mt-3">
                {reviews.map((review)=>(
                     <ReviewCard key={review._id} review={review} />
                ))}
            </div>
        </div>
        </>
    )
}