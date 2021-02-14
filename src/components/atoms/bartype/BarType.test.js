import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import BarType from './BarType';

const testProps = {
  selectMusicalSymbol: jest.fn()
};

describe('BarType', () => {
  it('selects the correct Bar', () => {
    const { getByText } = testRenderComponent(BarType, testProps);

    fireEvent.click(getByText('Measure Bar'));

    expect(testProps.selectMusicalSymbol).toHaveBeenCalledWith('measure-bar');
  });
});