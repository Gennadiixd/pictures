import React from 'react';
import { withRouter } from "react-router";
import { getCurrentPageName } from '../../helpers/pages-helper';

function LayoutMain({ children, location: { pathname }, routesConfig }) {
  return (
    <div className="col-12 -centering-main-axis">
      <div className="col-11 --framed">
        <div className="col-2">
          {getCurrentPageName(pathname, routesConfig)}
        </div>
        <div className="col-8 l-page-container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default withRouter(LayoutMain)