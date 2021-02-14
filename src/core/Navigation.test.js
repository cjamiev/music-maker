import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import Navigation from './Navigation';

const testProps = {};
const mockProps = {
  location: {
    pathname: 'home'
  },
  push: jest.fn()
};

jest.mock('react-router-dom', () => ({
  useHistory: () => mockProps
}));

describe('Navigation', () => {
  it('select the correct tab', () => {
    const { getByText } = testRenderComponent(Navigation, testProps);

    fireEvent.click(getByText('Home'));

    expect(mockProps.push).toHaveBeenCalledWith('/home');
  });
});