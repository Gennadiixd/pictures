import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './config';
import LayoutMain from '../../pages/layout/layout-main';

export default function PictureRoutes() {
  return (
    <LayoutMain
      routesConfig={routes}
    >
      <Switch>
        <Route {...routes.main} />
        <Route {...routes.history} />
      </Switch>
    </LayoutMain>
  )
}
