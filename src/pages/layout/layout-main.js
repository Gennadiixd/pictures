import React from 'react';
import { getCurrentPageName } from '../../helpers/pages-helper';
import { useHistory } from "react-router-dom";
import arrow from '../../assets/svg/arrow.svg'

export default function LayoutMain({ children, routesConfig }) {
  let history = useHistory();
  const { location: { pathname } } = history

  const isMainPage = () => {
    if (pathname === '/') return true;
    return false;
  }

  const goBack = () => {
    history.goBack();
  }

  const BackButton = () => {
    return (
      <div className="btn-container">
        <button
          onClick={goBack}
          className="btn btn-go-back"
        >
          <img src={arrow} className="-icon" />
        </button>
      </div>
    )
  }

  return (
    <div className="col-12 -centering-main-axis">
      <div className="col-11 --framed">
        <div className="col-2">
          {!isMainPage() && (
            <BackButton />
          )}
          {getCurrentPageName(pathname, routesConfig)}
        </div>
        <div className="col-8 l-page-container">
          {children}
        </div>
      </div>
    </div>
  )
}