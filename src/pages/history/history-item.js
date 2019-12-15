import React from 'react';
import Picture from '../../components/picture';
import Icon from "../../components/icon";

export default function HistoryItem({
  importDateTime,
  pictureUrl,
  title,
  index
}) {

  const fireHandler = (e) => {
    e.target.action = 'remove';
    e.target.payload = index;
  }

  return (
    <div className="history-item col-12">
      <div className="history-item-container">
        <div className="history-image-container">
          <Picture
            {...{ pictureUrl }}
          />
        </div>
        <button
          className="-btn -btn-delete"
          onClick={fireHandler}
        >
          <Icon type="garbageBin" />
        </button>
      </div>
      <div className="history-description-container col-7">
        <p className="history-description-text"> {title}</p>
        <p className="history-date-time"> {importDateTime}</p>
      </div>
    </div>
  )
}
