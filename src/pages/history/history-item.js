import React from 'react';
// picture: { importDateTime, pictureUrl, title }
import Picture from '../../components/picture';

export default function HistoryItem({
  importDateTime,
  pictureUrl,
  title,
  index
}) {

  const fireHandler = (e) => {
    e.action = 'remove';
    e.payload = index;
  }

  return (
    <div className="-history-item col-12">
      <div className="-history-item-container">
        <Picture
          {...{ pictureUrl }}
          element='-history-image'
        />
        <button
          className="-btn-delete"
          onClick={fireHandler}
        >
          D
      </button>
      </div>
      <div className="-description col-7">
        <p className="-description-text"> {title}</p>
        <p className="-date-time"> {importDateTime}</p>
      </div>
    </div>
  )
}
