import React from 'react';
import { getCurrentPageName } from '../../helpers/pages-helper';
import { useHistory } from "react-router-dom";
import Icon from "../../components/icon";

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
      <div className="-btn-container">
        <button
          onClick={goBack}
          className="-btn -btn-go-back"
        >
          <Icon type="arrow" />
        </button>
      </div>
    )
  }

  return (
    <div className="col-12 --centering-main-axis">
      <div className="col-11 body --framed">
        <div className="col-3 col-xs-5 --centering-main-axis -pointer">
          {!isMainPage() && (
            <BackButton />
          )}
          <p> {getCurrentPageName(pathname, routesConfig)}</p>
        </div>
        <div className="col-6 col-xs-11 l-page-container">
          {children}
        </div>
      </div>
    </div>
  )
}