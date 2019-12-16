import React from 'react';
import Icon from '../components/icon';

Button.defaultProps = {
  className: ''
}

export default function Button({ 
  className, 
  children,
  disabled, 
  onClick, 
  type, 
}) {

  const classes = `-btn ${className}`

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {type && (
        <Icon type={type} />
      )}
      {children}
    </button>
  )
}
