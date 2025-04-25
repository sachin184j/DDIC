import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../../components/Banner/banner';
import ViewAllButton from '../../components/ViewAllButton';
import './resources.css';
import GetInTouch from '../../components/getInTouch';
import Footer from '../../components/Footer/footer';
const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const pageContent = {
    title: "Resources",
    content: "Browse our collection of resources",
  };

  useEffect(() => {
    axios
      .get('https://ddic.hgsinteractive.com/api/home-resources')
      .then((response) => {
        setResources(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
        setLoading(false);
      });
  }, []);

  // const baseURL = 'https://ddic.hgsinteractive.com';  // Update this base URL if necessary
  // const imageURL = baseURL + banner.field_image;


  return (
    <div>
      <Banner />
      <section className="py-5 resource-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h3 className="textWithLeftLine pb-2">{pageContent.title}</h3>
              <p>{pageContent.content}</p>
            </div>
            <div className="col-sm-4 text-end">
              <ViewAllButton link="/job-openings" label="View All" />
            </div>
          </div>

          <div className="row mt-4">
            {loading ? (
              <p>Loading resources...</p>
            ) : (
              resources.map((item, index) => (
                <div className="col-sm-6 col-lg-3" key={index}>
                  <div className="item">
                  <img className="img-fluid" src={item.field_image?.[0]?.url} alt={item.field_image?.[0]?.alt || 'Resource Image'}/>
                    <div className="content">
                      <h4>{item.title?.[0]?.value}</h4>
                      <div className="owl-text-overlay">
                        <h5 className="owl-title">{item.field_sub_heading?.[0]?.value}</h5>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.body?.[0]?.summary || '' }}></p>
                      <a className="btn-secondary arrow" href={item.path?.[0]?.alias || "#"}>Read More</a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default Resources;
