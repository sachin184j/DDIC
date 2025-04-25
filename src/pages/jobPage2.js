import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import './jobPage2.css';

const JobPage = () => {
  const [leftData, setLeftData] = useState(null); // For left section data
  const [rightData, setRightData] = useState(null); // For right section data

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

  // Fetch data for both sections
  const fetchData = async () => {
    try {
      const leftApiUrl = 'https://ddic.hgsinteractive.com/api/career-life-at-DDIC';
      const rightApiUrl = 'https://ddic.hgsinteractive.com/api/job-openings';

      const [leftResponse, rightResponse] = await Promise.all([
        axios.get(leftApiUrl),
        axios.get(rightApiUrl),
      ]);

      setLeftData(leftResponse.data[0]); // Left section
      setRightData(rightResponse.data);  // Right jobs
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
                      link="#" // Replace with actual link if available
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
    </div>
  );
};

export default JobPage;
