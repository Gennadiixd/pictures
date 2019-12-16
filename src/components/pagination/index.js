import React, { useState } from 'react';
import Button from '../../components/button.js';

export default function Pagination({ items, perPage, children }) {
  const [itemsPerPage, setItemsPerPage] = useState(perPage);

  const showMoreItems = () => {
    setItemsPerPage(itemsPerPage + perPage);
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
          return null;
        })
      }
      {hasMoreItems() && (
        <Button
          className="-btn-primary"
          onClick={showMoreItems}
        >
          Show More
        </Button>
      )}
    </>
  )
}