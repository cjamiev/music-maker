import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateMusic } from 'components/Pages/CreateMusic';
import { TestPage } from 'components/Pages/TestPage';
import { ViewSongs } from 'components/Pages/ViewSongs';
import { ViewSheetMusic } from 'components/Pages/ViewSheetMusic';
import { ErrorPage } from 'components/Pages/ErrorPage';

export const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/view" />} />
      <Route path="/view" element={<ViewSongs />} />
      <Route path="/viewsheet/:songid/:page" element={<ViewSheetMusic />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/create" element={<CreateMusic />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
});
