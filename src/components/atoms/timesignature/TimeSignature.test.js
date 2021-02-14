import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import TimeSignature from './TimeSignature';

const testProps = {
  timeSignature: '4/4',
  selectTimeSignature: jest.fn()
};

describe('TimeSignature', () => {
  it('selects the correct time', () => {
    const { getByText } = testRenderComponent(TimeSignature, testProps);

    fireEvent.click(getByText('2/2'));

    expect(testProps.selectTimeSignature).toHaveBeenCalledWith('2/2');
  });
});