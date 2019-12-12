import React from 'react';
import Picture from '../../components/picture';

export default function View({ fetchPicture, importDateTime, pictureUrl, title }) {
  return (
    <div>
      Main
      <Picture
        {...{ title }}
      />
      <button
        onClick={fetchPicture}
      >
        click
      </button>
    </div>
  )
}
