"use client";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    // Assuming you have a total number of pages (e.g., totalPages) in your data

    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pagination-wrap mt-50">
      <nav aria-label="Page navigation example">
        <ul className="pagination list-wrap">
          <li className="page-item next-page" onClick={handlePrevPage}>
            <div style={{ cursor: "pointer" }} className="page-link">
              <i className="fas fa-arrow-left"></i>
            </div>
          </li>
          {/* Assuming you have a fixed number of pages, you can adjust this dynamically based on your data */}
          {[1, 2, 3, 4].map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                {page}
              </div>
            </li>
          ))}
          {currentPage > 4 && (
            <li className={`page-item active`}>
              <div style={{ cursor: "pointer" }} className="page-link">
                {currentPage}
              </div>
            </li>
          )}
          <li className="page-item next-page" onClick={handleNextPage}>
            <div style={{ cursor: "pointer" }} className="page-link">
              <i className="fas fa-arrow-right"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
