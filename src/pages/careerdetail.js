import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import ResumeForm from '../components/ResumeForm';
import Footer from '../components/Footer/footer';
import './careerdetail.css';

const CareerDetail = () => {
  // const { jobId } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ddic.hgsinteractive.com/api/job-opening-detail/28`)
      .then((response) => {
        console.log('Full API Response:', response);
        console.log('API Response Data:', response.data);
        setJobData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setError("Failed to load job details.");
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <section className="Sustainability py-sm-3">
        <div className="container">
          <div className="row">
          {jobData.length > 0 ? (
            jobData.map((item, index) => (
              <div key={index} className="col-lg-6 pt-4 career-section">
                <h2 className="pb-3 textWithLeftLine">
                {item?.field_heading?.[0]?.value || "Job Title"}
                </h2>
                <div className="py-3">
                  <h5 className="pb-3">Requirement</h5>
                  <p dangerouslySetInnerHTML={{ __html: item?.field_sub_text?.[0]?.value || "Job requirements here..." }} />
                </div>
                <div className="pb-3">
                  <h5 className="pb-3">Job Description</h5>
                  <p dangerouslySetInnerHTML={{ __html: item?.field_sub_text?.[0]?.value || "Job description here..." }} />
                </div>
              </div>
              ))
            ) : (
              <div>No job data found.</div>
            )}

            <div className="col-lg-6 pt-4">
              {/* Resume Form */}
              <ResumeForm/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareerDetail;
