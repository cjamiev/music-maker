import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import RestType from './RestType';

const testProps = {
  selectMusicalSymbol: jest.fn()
};

describe('RestType', () => {
  it('selects the correct rest', () => {
    const { getByText } = testRenderComponent(RestType, testProps);

    fireEvent.click(getByText('Whole Rest'));

    expect(testProps.selectMusicalSymbol).toHaveBeenCalledWith('whole-rest');
  });
});