import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import Pedal from './Pedal';

const testProps = {
  selectPedal: jest.fn()
};

describe('Pedal', () => {
  it('selects the correct pedal', () => {
    const { getByText } = testRenderComponent(Pedal, testProps);

    fireEvent.click(getByText('Pedal Start'));

    expect(testProps.selectPedal).toHaveBeenCalledWith('pedal-start');
  });
});