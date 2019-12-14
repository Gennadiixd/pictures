import React from 'react';
import Picture from '../../components/picture';

export default function View({
  fetchPicture,
  picture: { pictureUrl }
}) {
  return (
    <>
      <Picture
        {...{ pictureUrl }}
        element = '-main-image'
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
