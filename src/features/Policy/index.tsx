import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

const Policy = () => {
    const match = useRouteMatch()
  console.log(match);
  
  return (
    <Switch>
      <Route path={`${match.url}`} component={MainPage} />
    </Switch>
  );
}

export default Policy
