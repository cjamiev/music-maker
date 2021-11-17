import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import KeySignature from './KeySignature';

const testProps = {
  keySignature: '2#',
  selectKeySignature: jest.fn()
};

describe('KeySignature', () => {
  it('selects the correct Key Signature', () => {
    const { getByText } = testRenderComponent(KeySignature, testProps);

    fireEvent.click(getByText('G/e'));

    expect(testProps.selectKeySignature).toHaveBeenCalledWith('1#');
  });
});