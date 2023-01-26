import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPages, changePage, page }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page_wrapper">
      {pagesArray.map((p) => {
        return (
          <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page_current' : 'page'}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
