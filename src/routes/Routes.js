import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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

const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route exact path="/" element={<View />} />
      <Route path="/view" element={<View />} />
      <Route path="/create" element={<Create />} />
      <Route element={<NotFoundPage />} />
    </Routes>
  );
});

export default AppRoutes;
