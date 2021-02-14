import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import NoteModifier from './NoteModifier';

const testProps = {
  selectNoteModifier: jest.fn()
};

describe('NoteModifier', () => {
  it('selects the correct Note Modifier', () => {
    const { getByText } = testRenderComponent(NoteModifier, testProps);

    fireEvent.click(getByText('flat'));

    expect(testProps.selectNoteModifier).toHaveBeenCalledWith({ accidental: 'flat' });
  });
});