import React, { useState } from 'react';

export default function Pagination({ items, perPage, children }) {
  const [itemsPerPage, setItemsPerPage] = useState(perPage);

  const showMoreItems = () => {
    setItemsPerPage(perPage + perPage);
  }

  const hasMoreItems = () => {
    if (itemsPerPage < items.length) return true;
    return false;
  }

  return (
    <>
      {
        items.map((page, index) => {
          if (index < itemsPerPage) {
            return children(page, index);
          }
        })
      }
      {hasMoreItems() && (
        <button
          onClick={showMoreItems}
          className="btn btn-primary"
        >
          Show More
        </button>
      )}
    </>
  )
}
