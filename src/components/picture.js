import React from 'react'

export default function Picture({ pictureUrl }) {
  return (
    <div className='-main-image-container'>
      <img src={pictureUrl} className='-main-image' />
    </div>
  )
}
