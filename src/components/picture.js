import React from 'react'

export default function Picture({ pictureUrl }) {
  return (
    <img src={pictureUrl} className='-image' alt='random element' />
  )
}
