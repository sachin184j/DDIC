import React from 'react';
import { Link } from 'react-router-dom';

const BtnSecondary = ({ link = "#", label = "", type = "button", disabled = false }) => {
  return (
    <Link to={link}>
      <button type={type} className="btn-secondary arrow" disabled={disabled}>
        {label}
      </button>
    </Link>
  );
};

export default BtnSecondary;

