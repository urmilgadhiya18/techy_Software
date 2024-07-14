import React from 'react';
import './ServiceCard.css'

export default function ServiceCard({img, name}){
    return(
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                <div className="card rounded-4">
                    <div className="img">
                        <img src={img} className="card-img-top" alt="" height={'218px'}/>
                    </div>
                    <hr style={{color:"white", margin:"0", padding:"0"}} />
                    <div className="card-body text-white">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            Description of Service 3 goes here. Vestibulum nec ipsum quis urna maximus mollis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, reiciendis?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}