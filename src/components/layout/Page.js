import React from 'react';

import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';

const Page = ({ title, error, children, noFooter = false }) => {
  return (
    <div className="page">
      <PageHeader title={title} error={error} />
      <PageContent>{children}</PageContent>
      {!noFooter && <PageFooter />}
    </div>
  );
};

export default Page;