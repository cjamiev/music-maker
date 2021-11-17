import { fireEvent } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import NoteType from './NoteType';

const testProps = {
  selectNoteType: jest.fn()
};

describe('NoteType', () => {
  it('selects the correct Note Type', () => {
    const { getByText } = testRenderComponent(NoteType, testProps);

    fireEvent.click(getByText('Whole Note'));

    expect(testProps.selectNoteType).toHaveBeenCalledWith('whole-note');
  });
});