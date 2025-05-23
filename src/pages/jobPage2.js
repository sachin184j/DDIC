import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import Pagination from '../components/pagination';
import Footer from '../components/Footer/footer';
import GetInTouch from '../components/getInTouch';
import './jobPage2.css';
import BtnSecondary from '../components/btnSecondary'; 

const JobPage = () => {
  const [leftData, setLeftData] = useState(null);
  const [rightData, setRightData] = useState(null);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper functions
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const truncateText = (html, length = 150) => {
    const text = stripHtmlTags(html);
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  // Fetch data for left and right sections
  const fetchData = async () => {
    try {
      const leftApiUrl = 'https://ddic.hgsinteractive.com/api/career-life-at-DDIC';
      const rightApiUrl = 'https://ddic.hgsinteractive.com/api/job-openings';

      const [leftResponse, rightResponse] = await Promise.all([
        axios.get(leftApiUrl),
        axios.get(rightApiUrl),
      ]);

      setLeftData(leftResponse.data[0]);
      setRightData(rightResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            {/* Left Section */}
            <div className='col-sm-6 career-section pe-lg-5'>
              <h2 className="pb-3 textWithLeftLine">
                {leftData?.field_sub_heading?.[0]?.value || 'Loading...'}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: leftData?.field_sub_text?.[0]?.processed || 'Loading...',
                }}
              />
            </div>

            {/* Right Section */}
            <div className='col-sm-6 job-opennings-list'>
              {rightData ? (
                rightData.length > 0 ? (
                  rightData.map((job, index) => (
                    <JobCard
                      key={index}
                      title={job.field_heading?.[0]?.value || 'Untitled'}
                      description={truncateText(job.field_sub_text?.[0]?.processed || '')}
                      link="/career-detail-page" // Replace with actual link if available
                    />
                  ))
                ) : (
                  <p>No job openings available right now.</p>
                )
              ) : (
                <p>Loading jobs...</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pagination and Resource Cards Section */}
      <section className="py-4 resource-detailSection">
        <Pagination />
        <div className='container'>
          <div className="row mt-4">
            {loading ? (
              <p>Loading resources...</p>
            ) : (
              resources.slice(0, 8).map((item, index) =>(
                <div className="col-sm-6 col-lg-3" key={index}>
                  <div className="item">
                    {/* Image from API */}
                    <img className="img-fluid" src={item.field_image?.[0]?.url} alt={item.field_image?.[0]?.alt || 'Resource Image'} />

                    <div className="content">
                      {/* Title from API */}
                      <h4>{item.field_heading?.[0]?.value}</h4>

                      <div className="owl-text-overlay">
                        <h5 className="owl-title">{item.field_sub_heading?.[0]?.value}</h5>
                      </div>

                      {/* Summary or description */}
                      <p dangerouslySetInnerHTML={{ __html: item.body?.[0]?.summary || '' }}></p>

                      {/* Button */}
                      <BtnSecondary href={item.path?.[0]?.alias || "#"} label="Read More" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="row mt-5 mb-4">
            {loading ? (
              <p>Loading resources...</p>
            ) : (
              resources.slice(0, 8).map((item, index) =>(
                <div className="col-sm-6 col-lg-3" key={index}>
                  <div className="item">
                    {/* Image from API */}
                    <img className="img-fluid" src={item.field_image?.[0]?.url} alt={item.field_image?.[0]?.alt || 'Resource Image'} />

                    <div className="content">
                      {/* Title from API */}
                      <h4>{item.field_heading?.[0]?.value}</h4>

                      <div className="owl-text-overlay">
                        <h5 className="owl-title">{item.field_sub_heading?.[0]?.value}</h5>
                      </div>

                      {/* Summary or description */}
                      <p dangerouslySetInnerHTML={{ __html: item.body?.[0]?.summary || '' }}></p>

                      {/* Button */}
                      <BtnSecondary href={item.path?.[0]?.alias || "#"} label="Read More" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default JobPage;
