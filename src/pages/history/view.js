import React, { useState } from 'react';
import HistoryItem from './history-item';
import Pagination from '../../components/pagination';
import { EventListener } from '../../helpers/history-event-handler';

export default function History({ history, removeHistoryItem }) {
  const [eventListener] = useState(new EventListener({ remove: removeHistoryItem }));

  return (
    <div
      className="col-11 history-container"
      onClick={eventListener.listen}
    >
      <Pagination
        items={history}
        perPage={5}
      >
        {
          (page, index) => (
            <HistoryItem
              {...{ ...page, index }}
              key={page.id + page.importDateTime}
            />
          )
        }
      </Pagination>
    </div>
  )
}
