const minorSecond = 1;
const majorSecond = 2;
const minorThird = 3;
const majorThird = 4;
const perfectFourth = 5;
const tritone = 6;
const perfectFifth = 7;
const minorSixth = 8;
const majorSixth = 9;
const minorSeventh = 10;
const majorSeventh = 11;
const octave = 12;
const minorNinth = 13;
const majorNinth = 14;

export const pianoKeyList = ['A3', 'A#3', 'B3',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4', 'B4',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5', 'B5',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A6', 'A#6', 'B6',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A7'
];

export const bassPianoKeyList = [
  'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A2', 'A#2', 'B2',
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A3', 'A#3', 'B3',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4', 'B4',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5', 'B5',
  'C5'
];

export const intervalList = [
  {label: 'minor 2nd', value: minorSecond},
  {label: 'major 2nd', value: majorSecond},
  {label: 'minor 3rd', value: minorThird},
  {label: 'major 3rd', value: majorThird},
  {label: 'perfect 4rth', value: perfectFourth},
  {label: 'tritone', value: tritone},
  {label: 'perfect 5th', value: perfectFifth},
  {label: 'minor 6th', value: minorSixth},
  {label: 'major 6th', value: majorSixth},
  {label: 'minor 7th', value: minorSeventh},
  {label: 'major 7th', value: majorSeventh},
  {label: 'octave', value: octave},
  {label: 'minor 9th', value: minorNinth},
  {label: 'major 9th', value: majorNinth}
];

export const chordList = [
  {label: 'Minor', value: [minorThird, perfectFifth]},
  {label: 'Major', value: [majorThird, perfectFifth]},
  {label: 'Sus2', value: [majorSecond, perfectFifth]},
  {label: 'Sus4', value: [perfectFourth, perfectFifth]},
  {label: 'Augmented', value: [majorThird, minorSixth]},
  {label: 'Diminished', value: [minorThird, tritone]},
  {label: 'M6', value: [majorThird, majorSixth]},
  {label: 'm6', value: [minorThird, majorSixth]},
  {label: 'Dominant 7th', value: [majorThird, perfectFifth, minorSeventh]},
  {label: 'Major 7th', value: [majorThird, perfectFifth, majorSeventh]},
  {label: 'Minor Major 7th', value: [minorThird, perfectFifth, majorSeventh]},
  {label: 'Minor 7th', value: [minorThird, perfectFifth, minorSeventh]},
  {label: 'Diminished 7th', value: [minorThird, tritone, majorSixth]}
];
