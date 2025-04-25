import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllButton = ({ link = "#", label = "View All" }) => {
  return (
    <div>
      <Link to={link}>
        <button className="btn-primary arrow">
          {label}
        </button>
      </Link>
    </div>
  );
};

export default ViewAllButton;
