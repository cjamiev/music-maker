import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import Piano from './Piano';

const testProps = {
  selectPianoKey: jest.fn()
};

describe('Piano', () => {
  it('selects the correct key', () => {
    const { getByText } = testRenderComponent(Piano, testProps);

    fireEvent.click(getByText('C4'));

    expect(testProps.selectPianoKey).toHaveBeenCalledWith('C4');
  });
});