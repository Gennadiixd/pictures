import React from 'react';
import * as pictureRoutes from '../../routes/picture/config';
import * as practiceRoutes from '../../routes/practice/config';
import Link from '../Link';

export default function Header() {
  return (
    <div className="col-12 --centering-main-axis">
      <nav className="header col-11 --framed">
        <Link to={pictureRoutes.main} className='nav-link' />
        <Link to={pictureRoutes.history} className='nav-link' />
        <Link to={practiceRoutes.practice} className='nav-link' />
      </nav>
    </div>
  )
}
