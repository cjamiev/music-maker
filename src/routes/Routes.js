import React from 'react';
import { Navigate, Link, Route, Routes } from 'react-router-dom';
import View from './view';
import Test from './test';
import Create from './create';
import ErrorPage from './errorpage';

const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/view" />} />}
      <Route path="/view" element={<View />} />
      <Route path="/test" element={<Test />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
});

export default AppRoutes;
