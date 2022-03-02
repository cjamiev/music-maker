import React, { useMemo, useEffect, useState } from 'react';
import Page from 'components/layout';
import IconTest from './IconTest';
import { BeamTest } from './BeamTest';

const testId = 'beam';

const getTestComponent = () => {
  if(testId === 'icon') {
    return (<IconTest />);
  } else if (testId === 'beam') {
    return (<BeamTest />);
  } else {
    return (<p>Not Found</p>);
  }
};

const Test = () => {
  return (
    <Page>
      {getTestComponent(testId)}
    </Page>
  );
};

export default Test;
