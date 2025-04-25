import React from "react";
import BtnSecondary from './btnSecondary'; 

const JobCard = ({ title, description, link }) => {
  return (
    <ul className="list-unstyled">
         <li className="mb-4">
            <h3>{title ? title : "Job Title Not Available"}</h3>
            <div className="row">
                <div className="col-lg-8">
                <p className="mb-lg-0">
                    {description ? description : "Job description not available."}
                </p>
                </div>
                <div className="col-lg-4 mt-sm-3">
                <BtnSecondary link={link || "#"} label="Apply Now" />
                </div>
            </div>
        </li>
    </ul>
   
  );
};

export default JobCard;
