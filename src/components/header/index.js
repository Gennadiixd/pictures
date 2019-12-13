import React from 'react';
import * as routes from '../../routes/picture/config';
import Link from '../Link';

export default function Header() {
  return (
    <div className="-centring-all col-12 -centering-main-axis">
      <nav className="header col-11">
        <Link to={routes.main} className='nav-link' />
        <Link to={routes.history} className='nav-link' />
      </nav>
    </div>
  )
}
