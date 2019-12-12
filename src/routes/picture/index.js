import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './config';

export default function PictureRoutes() {
  return (
    <Switch>
      <Route {...routes.main}/>
      <Route {...routes.history} />
    </Switch>
  )
}
