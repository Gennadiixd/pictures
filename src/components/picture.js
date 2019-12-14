import React from 'react'

export default function Picture({ pictureUrl, element }) {
  return (
    <div className={`${element}-container`} >
      <img src={pictureUrl} className={`-image`} alt='random element'/>
    </div>
  )
}
