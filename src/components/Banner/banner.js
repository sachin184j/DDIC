import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Brochure from '../../assets/images/downloadBrochureIcon.png'; 
import MailIcon from '../../assets/images/mail-icon.png'; 
import './Banner.css';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ddic.hgsinteractive.com/api/home-banner')
      .then(response => {
        setBanner(response.data[0]);  // Get only the first banner
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching banner:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Banner...</p>;
  }

  // Set base URL for the images
  const baseURL = 'https://ddic.hgsinteractive.com';  // Update this base URL if necessary
  const imageURL = baseURL + banner.field_image;

  return (
    <section className="mainBanner" style={{ backgroundImage: `url(${imageURL})` }}>
        <div className="container caption" >
            <div className="row justify-content-center">
                <div className="col-lg-5 offset-lg-5" >
                    <h2>{banner.field_heading}</h2>
                    <p className="text-white col-lg-10">{banner.field_sub_heading}</p>
                </div>
            </div>
        </div>
        <ul class='rightSticky'>
            <li>
                <a href="Javascript:;"><img src={Brochure} class="img-fluid" />
                    <span>Download Brochure</span>
                </a>
            </li>
            <li>
                <a href="Javascript:;"><img src={MailIcon} class="img-fluid" />
                    <span>Enquire Now</span>
                </a>
            </li>
        </ul>
  </section>
  );
};

export default Banner;
