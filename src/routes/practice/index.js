import React from 'react';
import {Switch, Route} from 'react-router-dom';
import * as routes from './config';
import LayoutMain from '../../pages/layout/layout-main';

export default function PracticeRoutes() {
  return (
    <LayoutMain>
      <Switch>
        <Route {...routes.practice} />
      </Switch>
    </LayoutMain>
  )
}
