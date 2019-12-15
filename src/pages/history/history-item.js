import React from 'react';
import Picture from '../../components/picture';
import garbageBin from '../../assets/svg/garbage-bin.svg'

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
          <img src={garbageBin} className="-icon"/>
        </button>
      </div>
      <div className="-description col-7">
        <p className="-description-text"> {title}</p>
        <p className="-date-time"> {importDateTime}</p>
      </div>
    </div>
  )
}
