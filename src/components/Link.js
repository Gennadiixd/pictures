import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Link({ to }) {
  return (
    <NavLink to={to.path} exact activeClassName="--active">
      {to.name}
    </NavLink>
  )
}
