import React from 'react';
import Picture from '../../components/picture';

export default function View({
  fetchPicture,
  picture: { importDateTime, pictureUrl, title }
}) {

  return (
    <>
      <Picture
        {...{ pictureUrl }}
      />
      <button
        onClick={fetchPicture}
        className="-btn btn-primary"
      >
        Загрузить
      </button>
    </>
  )
}
