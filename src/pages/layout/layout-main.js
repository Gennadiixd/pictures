import React from 'react';
import { getCurrentPageName } from '../../helpers/pages-helper';
import { useHistory } from "react-router-dom";
import Button from "../../components/button.js";

export default function LayoutMain({ children }) {
  let history = useHistory();
  const { location: { pathname } } = history;

  const isMainPage = () => {
    return pathname === '/';
  };

  const goBack = () => {
    history.goBack();
  };

  const BackButton = () => {
    return (
      <div className="-btn-container">
        <Button
          className="-btn-go-back"
          onClick={goBack}
          type="arrow"
        >
        </Button>
      </div>
    )
  };

  return (
    <div className="col-12 --centering-main-axis">
      <div className="col-11 body --framed">
        <div className="col-3 col-xs-5 --centering-main-axis -pointer">
          {!isMainPage() && (
            <BackButton />
          )}
          <p> {getCurrentPageName(pathname)}</p>
        </div>
        <div className="col-6 col-xs-11 l-page-container">
          {children}
        </div>
      </div>
    </div>
  )
}