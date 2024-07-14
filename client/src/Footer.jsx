import React from 'react';
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <>
            <section className="p-0 text-center mt-0">
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="m-0">
                            <Link className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-facebook"></i></Link>
                            <Link className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-google"></i></Link>
                            <Link className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-instagram"></i></Link>
                            <Link className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-linkedin"></i></Link>
                            <Link className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-github"></i></Link>
                        </section>
                    </div>
                    <div className="text-center p-3 bg-dark fw-bold font-monospace">
                        Copyright © 2024 
                        <Link className="ms-2 text-white text-decoration-none" to="#">TechySoftware.com</Link>
                    </div>
                </footer>
            </section>
        </>
    )
}