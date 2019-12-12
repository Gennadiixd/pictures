import React from 'react';
import Picture from '../../components/picture';

export default function View({
  fetchPicture,
  picture: { importDateTime, pictureUrl, title }
}) {

  return (
    <div>
      Main
      <Picture
        {...{ pictureUrl }}
      />
      <button
        onClick={fetchPicture}
      >
        Загрузить
      </button>
    </div>
  )
}
