import { fireEvent, screen } from '@testing-library/react';
import { testRenderComponent } from 'testHelper';
import MusicStand from './MusicStand';

const testProps = {
  keySignature: '2#',
  timeSignature: '2/2',
  row: [],
  pianoKey: 'D4',
  noteType: 'half-note',
  noteModifier: { accidental: 'flat' },
  musicalSymbol: '',
  pedal: 'pedal-start'
};

const text = 'Key of D/b';

describe('MusicStand', () => {
  it('shows correct selection', () => {
    const { getByText } = testRenderComponent(MusicStand, testProps);

    expect(getByText(text)).toBeTruthy();
  });
});