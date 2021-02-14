export const pianoKeyList = [
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6'
];

export const keySignatures = [
  { key: '', label: 'C/a' },
  { key: '1#', label: 'G/e' },
  { key: '2#', label: 'D/b' },
  { key: '3#', label: 'A/f#' },
  { key: '4#', label: 'E/c#' },
  { key: '5#', label: 'B/g#' },
  { key: '6#', label: 'F#/d#' },
  { key: '7#', label: 'C#/a#' },
  { key: '1b', label: 'F/D' },
  { key: '2b', label: 'Bb/G' },
  { key: '3b', label: 'Eb/C' },
  { key: '4b', label: 'Ab/F' },
  { key: '5b', label: 'Db/Bb' },
  { key: '6b', label: 'Gb/Eb' },
  { key: '7b', label: 'Cb/Ab' }
];

export const timeSignatures = [
  { key: '2/2', label: '2/2' },
  { key: '2/4', label: '2/4' },
  { key: '3/4', label: '3/4' },
  { key: '4/4', label: '4/4' },
  { key: '3/8', label: '3/8' },
  { key: '6/8', label: '6/8' }
];

export const noteTypes = [
  { key: 'whole-note', label: 'Whole Note' },
  { key: 'half-note', label: 'Half Note' },
  { key: 'quarter-note', label: 'Quarter Note' },
  { key: 'eigth-note', label: '8th Note' },
  { key: 'sixteenth-note', label: '16th Note' },
  { key: 'dotted-whole-note', label: 'Dotted Whole Note' },
  { key: 'dotted-half-note', label: 'Dotted Half Note' },
  { key: 'dotted-quarter-note', label: 'Dotted Quarter Note' },
  { key: 'dotted-eigth-note', label: 'Dotted 8th Note' },
  { key: 'dotted-sixteenth-note', label: 'Dotted 16th Note' }
];

export const noteModifierTypes = [
  { key: { accidental: 'flat' }, label: 'flat' },
  { key: { accidental: 'sharp' }, label: 'sharp' },
  { key: { accidental: 'natural' }, label: 'natural' },
  { key: { accent: true }, label: 'accent' },
  { key: { rolled: true }, label: 'rolled' },
  { key: { fermata: true }, label: 'fermata' },
  { key: { stacatto: true }, label: 'stacatto' }
];

export const barTypes = [
  { key: 'measure-bar', label: 'Measure Bar' },
  { key: 'line-end-bar', label: 'Line End Bar' },
  { key: 'double-line-end-bar', label: 'Double Line End Bar' },
  { key: 'repeat-start-bar', label: 'Repeat Bar Start' },
  { key: 'repeat-end-bar', label: 'Repeat Bar End' }
];

export const restTypes = [
  { key: 'whole-rest', label: 'Whole Rest' },
  { key: 'half-rest', label: 'Half Rest' },
  { key: 'quarter-rest', label: 'Quarter Rest' },
  { key: 'eigth-rest', label: '8th Rest' },
  { key: 'sixteenth-rest', label: '16th Rest' },
  { key: 'dotted-whole-rest', label: 'Dotted Whole Rest' },
  { key: 'dotted-half-rest', label: 'Dotted Half Rest' },
  { key: 'dotted-quarter-rest', label: 'Dotted Quarter Rest' },
  { key: 'dotted-eigth-rest', label: 'Dotted 8th Rest' },
  { key: 'dotted-sixteenth-rest', label: 'Dotted 16th Rest' }
];

export const pedalTypes = [
  { key: 'pedal-start', label: 'Pedal Start' },
  { key: 'pedal-continue', label: 'Continue' },
  { key: 'pedal-overlap', label: 'Overlap' },
  { key: 'pedal-end', label: 'End' },
  { key: '', label: 'Remove' }
];