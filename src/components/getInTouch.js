// components/GetInTouch.js
import React from 'react';
import './getInTouch.css';
import BtnSecondary from './btnSecondary'; // path sahi karo, relative to this file
import bgImage from '../assets/images/getInTouch.png';

const getInTouchContent = {
  title: "Get in Touch",
  description: "Need to get in touch with our Support or Sales team?",
  buttonText: "Get Quote"
};

const GetInTouch = () => {
  return (
    <section className="get-in-touch text-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <h3>{getInTouchContent.title}</h3>
        <p>{getInTouchContent.description}</p>
        <BtnSecondary link="#" label={getInTouchContent.buttonText} />
      </div>
    </section>
  );
};

export default GetInTouch;
