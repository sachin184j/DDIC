import React, { useState } from 'react';
import axios from 'axios';
import BtnSecondary from '../components/btnSecondary';

const ResumeForm = ({ jobId }) => {
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('File selected:', e.target.files[0]); // Debugging line
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');  // Debugging line

    // Collect form data
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const country = e.target.country.value;
    const city = e.target.city.value;
    const workExperience = e.target.workExperience.value;
    const additionalInformation = e.target.additionalInformation.value;

    // Check if any required fields are empty
    if (!firstName || !lastName || !email || !phone || !country || !city || !workExperience || !file) {
      alert('Please fill in all required fields and upload your resume.');
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('work_experience', workExperience);
    formData.append('additional_information', additionalInformation);
    formData.append('job_id', jobId || 28); // Default jobId if none provided
    formData.append('resume', file);

    console.log("Form data being sent: ", formData); // Debugging line

    // Submit the form data via axios
    setIsSubmitting(true);
    axios.post('https://ddic.hgsinteractive.com/resumeupload-savedata', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('SUCCESS:', res.data);
      alert('Application submitted successfully!');
      e.target.reset();  // Reset form after submission
      setFile(null);     // Clear file state
    })
    .catch((err) => {
      console.error('ERROR:', err);
      alert('Failed to submit application.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="col-lg-12 p-4 p-sm-5 grey-bg inner-form">
      <h4>Submit Your Application</h4>
      <hr className="pt-0 mt-0 pb-1 mb-3" />
      {/* <form onSubmit={handleSubmit} noValidate> */}
      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="firstName">First Name<span>*</span></label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="lastName">Last Name<span>*</span></label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" className="form-control" id="email" required />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="phone">Phone<span>*</span></label>
              <input type="text" className="form-control" id="phone" required />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="country">Country<span>*</span></label>
              <select className="form-select" id="country" required>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="city">City<span>*</span></label>
              <select className="form-select" id="city" required>
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="workExperience">Work Experience<span>*</span></label>
              <select className="form-select" id="workExperience" required>
                <option value="">Select Experience</option>
                <option value="0">0 Year</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
              </select>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group pb-3">
              <label htmlFor="resume">Upload Resume<span>*</span></label>
              <input type="file" id="resume" className="form-control" onChange={handleFileChange} required />
            </div>
          </div>

          <div className="col-sm-12">
            <div className="form-group pb-3">
              <label htmlFor="additionalInformation">Additional Information</label>
              <textarea className="form-control" id="additionalInformation" rows="4"></textarea>
            </div>
          </div>

          <div className="col-sm-12 mt-3">
              <button type="submit" className="btn-secondary arrow">Submit</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
