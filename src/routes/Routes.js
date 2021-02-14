import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './home';
import Archive from './archive';

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
      <Route path="/home" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route component={NotFoundPage} />
    </Switch>
  );
});

export default Routes;
