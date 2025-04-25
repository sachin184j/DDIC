import React from 'react';
import { Link } from 'react-router-dom';

const btnSecondary = ({ link = "#", label = "View All" }) => {
  return (
    <div>
      <Link to={link}>
        <button className="btn-secondary arrow">
          {label}
        </button>
      </Link>
    </div>
  );
};

export default btnSecondary;
