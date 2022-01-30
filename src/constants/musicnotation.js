export const keySignatures = [
  { value: '', label: 'C/a' },
  { value: '1#', label: 'G/e' },
  { value: '2#', label: 'D/b' },
  { value: '3#', label: 'A/f#' },
  { value: '4#', label: 'E/c#' },
  { value: '5#', label: 'B/g#' },
  { value: '6#', label: 'F#/d#' },
  { value: '7#', label: 'C#/a#' },
  { value: '1b', label: 'F/D' },
  { value: '2b', label: 'Bb/G' },
  { value: '3b', label: 'Eb/C' },
  { value: '4b', label: 'Ab/F' },
  { value: '5b', label: 'Db/Bb' },
  { value: '6b', label: 'Gb/Eb' },
  { value: '7b', label: 'Cb/Ab' }
];
export const mapKeySignatures = {
  '':{},
  '1#':{
    showFSharp:true,
    showCSharp:false,
    showGSharp:false,
    showDSharp:false,
    showASharp:false,
    showESharp:false,
    showBSharp:false
  },
  '2#':{
    showFSharp:true,
    showCSharp:true,
    showGSharp:false,
    showDSharp:false,
    showASharp:false,
    showESharp:false,
    showBSharp:false
  },
  '3#':{
    showFSharp:true,
    showCSharp:true,
    showGSharp:true,
    showDSharp:false,
    showASharp:false,
    showESharp:false,
    showBSharp:false
  },
  '4#':{
    showFSharp:true,
    showCSharp:true,
    showGSharp:true,
    showDSharp:true,
    showASharp:false,
    showESharp:false,
    showBSharp:false
  },
  '5#':{
    showFSharp:true,
    showCSharp:true,
    showGSharp:true,
    showDSharp:true,
    showASharp:true,
    showESharp:false,
    showBSharp:false
  },
  '6#':{
    showFSharp:true,
    showCSharp:true,
    showGSharp:true,
    showDSharp:true,
    showASharp:true,
    showESharp:true,
    showBSharp:false
  },
  '7#':{
    showFSharp:true,
    showCSharp:true,
    showGSharp:true,
    showDSharp:true,
    showASharp:true,
    showESharp:true,
    showBSharp:true
  },
  '1b':{
    showBFlat:true,
    showEFlat:false,
    showAFlat:false,
    showDFlat:false,
    showGFlat:false,
    showCFlat:false,
    showFFlat:false
  },
  '2b':{
    showBFlat:true,
    showEFlat:true,
    showAFlat:false,
    showDFlat:false,
    showGFlat:false,
    showCFlat:false,
    showFFlat:false
  },
  '3b':{
    showBFlat:true,
    showEFlat:true,
    showAFlat:true,
    showDFlat:false,
    showGFlat:false,
    showCFlat:false,
    showFFlat:false
  },
  '4b':{
    showBFlat:true,
    showEFlat:true,
    showAFlat:true,
    showDFlat:true,
    showGFlat:false,
    showCFlat:false,
    showFFlat:false
  },
  '5b': {
    showBFlat:true,
    showEFlat:true,
    showAFlat:true,
    showDFlat:true,
    showGFlat:true,
    showCFlat:false,
    showFFlat:false
  },
  '6b': {
    showBFlat:true,
    showEFlat:true,
    showAFlat:true,
    showDFlat:true,
    showGFlat:true,
    showCFlat:true,
    showFFlat:false
  },
  '7b': {
    showBFlat:true,
    showEFlat:true,
    showAFlat:true,
    showDFlat:true,
    showGFlat:true,
    showCFlat:true,
    showFFlat:true
  }
};

export const timeSignatures = [
  { value: { numerator: 4, denominator: 4, commonTime: true }, label: 'Common Time' },
  { value: { numerator: 2, denominator: 2, commonTime: true, cutTime: true }, label: 'Cut Time' },
  { value: { numerator: 2, denominator: 2 }, label: '2/2' },
  { value: { numerator: 2, denominator: 4 }, label: '2/4' },
  { value: { numerator: 3, denominator: 4 }, label: '3/4' },
  { value: { numerator: 4, denominator: 4 }, label: '4/4' },
  { value: { numerator: 3, denominator: 8 }, label: '3/8' },
  { value: { numerator: 6, denominator: 8 }, label: '6/8' }
];

export const noteTypes = [
  { value: 'whole-note', label: 'Whole Note' },
  { value: 'half-note', label: 'Half Note' },
  { value: 'quarter-note', label: 'Quarter Note' },
  { value: 'eigth-note', label: '8th Note' },
  { value: 'sixteenth-note', label: '16th Note' }
];

export const noteModifierTypes = [
  { value: 'dotted', label: 'Dotted' },
  { value: 'flat', label: 'Flat' },
  { value: 'sharp', label: 'Sharp' },
  { value: 'natural', label: 'Natural' },
  { value: 'accent', label: 'Accent' },
  { value: 'rolled', label: 'Rolled' },
  { value: 'fermata', label: 'Fermata' },
  { value: 'stacatto', label: 'Stacatto' }
];

export const barTypes = [
  { value: 'measure-bar', label: 'Measure Bar' },
  { value: 'line-end-bar', label: 'Line End Bar' },
  { value: 'repeat-start-bar', label: 'Repeat Bar Start' },
  { value: 'repeat-end-bar', label: 'Repeat Bar End' }
];

export const restTypes = [
  { key: 'whole-rest', label: 'Whole Rest', value: { showWholeRest: true } },
  { key: 'half-rest', label: 'Half Rest', value: { showHalfRest: true } },
  { key: 'quarter-rest', label: 'Quarter Rest', value: { showQuarterRest: true } },
  { key: 'eighth-rest', label: '8th Rest', value: { showEighthRest: true } },
  { key: 'sixteenth-rest', label: '16th Rest', value: { showSixteenthRest: true } },
  { key: 'dotted-whole-rest', label: 'Dotted Whole Rest', value: { showWholeRest: true, showDotted: true } },
  { key: 'dotted-half-rest', label: 'Dotted Half Rest', value: { showHalfRest: true, showDotted: true } },
  { key: 'dotted-quarter-rest', label: 'Dotted Quarter Rest', value: { showQuarterRest: true, showDotted: true } },
  { key: 'dotted-eigth-rest', label: 'Dotted 8th Rest', value: { showEighthRest: true, showDotted: true } },
  { key: 'dotted-sixteenth-rest', label: 'Dotted 16th Rest', value: { showSixteenthRest: true, showDotted: true } }
];

export const pedalTypes = [
  { value: 'pedal-start', label: 'Pedal Start' },
  { value: 'pedal-continue', label: 'Continue' },
  { value: 'pedal-overlap', label: 'Overlap' },
  { value: 'pedal-end', label: 'End' },
  { value: '', label: 'Remove' }
];