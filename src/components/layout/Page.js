import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Button from 'components/button';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';

const NAV_ITEMS = Object.values(ROUTES);

const Page = ({ children, footerComponent }) => {
  const history = useHistory();
  const currentPage = NAV_ITEMS.find((item) => item.url === history.location.pathname);

  return (
    <div className="page scrollbar">
      <div className="page__main">
        <PageHeader title={currentPage.label} />
        <PageContent>{children}</PageContent>
        <PageFooter> {footerComponent} </PageFooter>
      </div>
    </div>
  );
};

export default Page;
