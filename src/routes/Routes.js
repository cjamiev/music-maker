import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import View from './view';
import Create from './create';

const NotFoundPage = React.memo(() => {
  return (
    <div>
      <h4>404 Page Not Found</h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
});

const Routes = React.memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/view" component={View} />
      <Route path="/create" component={Create} />
      <Route component={NotFoundPage} />
    </Switch>
  );
});

export default Routes;
