import React, { useState } from 'react';
import arrowLeft from '../assets/images/arrow-left.png'; 
import arrowRight from '../assets/images/arrow-right.png'; 
import filterIcon from '../assets/images/filter-icon.png'; 
import './pagination.css';

const ProductFilter = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // You can dynamically calculate this from data if needed

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle pagination click
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
        <div className="product-filter">
            <div className="row">
            {/* Filter section */}
            <div className="col-lg-8">
                <form>
                    <div className="d-grid">
                    <div>
                        <label>Filter</label>
                        <select className="form-select" value={filter} onChange={handleFilterChange}>
                        <option value="All" selected>All</option>
                        <option value="Lorem">Lorem</option>
                        <option value="Ipsum">Ipsum</option>
                        </select>
                    </div>

                    <div className="wrapperLine">
                        <div className="or-separator">
                        <div className="vertical-line"></div>
                        <div className="d-none d-lg-block d-xl-block">Or</div>
                        <p className="d-block d-md-block d-lg-none d-xl-none d-sm-block mb-0"><span>Or</span></p>
                        <div className="vertical-line"></div>
                        </div>
                    </div>

                    <div>
                        <label>Search</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Filter By Keywords"
                        value={search}
                        onChange={handleSearchChange}
                        />
                    </div>
                    <div className="btnSearch">
                        <button className="btn-secondary" type="button">
                        Filter
                        <img src={filterIcon} className="img-fluid" alt="filter icon" />
                        </button>
                    </div>
                    </div>
                </form>
            </div>

            {/* Pagination Section */}
            <div className="col-lg-4 d-none d-lg-block d-xl-block d-md-block d-sm-block align-self-end">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    >
                    <img src={arrowLeft} alt="previous" />
                    </button>
                </li>

                {/* Page numbers */}
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                    </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                    <img src={arrowRight} alt="next" />
                    </button>
                </li>
                </ul>
            </nav>
            </div>
            </div>
        </div>
      
    </div>
  );
};

export default ProductFilter;