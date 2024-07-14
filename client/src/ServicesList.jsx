import React from 'react';
import ServiceCard from './ServiceCard';
import webDev from './assets/webdev.png'
import softWare from './assets/software.png'
import devOps from './assets/devOps.png'
import marketing from './assets/marketing.png'
import aiml from './assets/aiml.png'
import cloud from './assets/cloud.png'

export default function ServicesList() {
  return (
    <div className="container my-5 py-5">
      <div className="row pt-5">
        <div className="col-md-8 mx-auto text-center text-white">
          <h2 className="mb-4 display-4">Our Services</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus felis ut libero varius, vitae
            ultrices justo ullamcorper. Vestibulum nec ipsum quis urna maximus mollis.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <ServiceCard img={webDev} name={'Web Development'} />
        <ServiceCard img={softWare} name={'Software Development'} />
        <ServiceCard img={marketing} name={'Marketing'} />
        <ServiceCard img={aiml} name={'AI & ML Development'} />
        <ServiceCard img={devOps} name={'Dev Ops'} />
        <ServiceCard img={cloud} name={'Cloud Development'} />
      </div>
    </div>
  );
}