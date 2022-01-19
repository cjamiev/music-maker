import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';
import SidePanel from './SidePanel';

const NAV_ITEMS = Object.values(ROUTES);

const Page = ({ children, sidePanelContent, footerComponent }) => {
  const location = useLocation();
  const currentPage = NAV_ITEMS.find((item) => item.url === location.pathname) || {};

  return (
    <div className="page scrollbar">
      <SidePanel sidePanelContent={sidePanelContent} />
      <div className="page__main">
        {currentPage.label && <PageHeader title={currentPage.label} />}
        <PageContent>{children}</PageContent>
        <PageFooter> {footerComponent} </PageFooter>
      </div>
    </div>
  );
};

export default Page;
