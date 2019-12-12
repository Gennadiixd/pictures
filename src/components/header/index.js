import React from 'react';
import * as routes from '../../routes/picture/config';
import Link from '../Link';

export default function Header() {
  return (
    <div className="header-container">
      <Link to={routes.main} />
      <Link to={routes.history} />
    </div>
  )
}
