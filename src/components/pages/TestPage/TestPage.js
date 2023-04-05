import React, { useMemo, useEffect, useState } from 'react';
import { Page }from 'components/core/Page';
import IconTest from './IconTest';
import { BeamBuilder } from 'components/organisms/BeamBuilder';

const testId = 'beam';

const getTestComponent = () => {
  if(testId === 'icon') {
    return (<IconTest />);
  } else if (testId === 'beam') {
    return (<BeamBuilder />);
  } else {
    return (<p>Not Found</p>);
  }
};

export const TestPage = () => {
  return (
    <Page>
      {getTestComponent(testId)}
    </Page>
  );
};
