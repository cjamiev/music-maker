import React from 'react';
import { render } from '@testing-library/react';

const testRenderComponent = (Component, props = {}) => {
  return render(<Component {...props} />);
};

export {
  testRenderComponent
};