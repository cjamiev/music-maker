/* eslint-disable no-magic-numbers */
import { DISTANCE_BETWEEN_STAFF_LINES } from './svgattributes';

export const pianoKeyList = [
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6'
];
export const mapNotePosition = {
  'A3': DISTANCE_BETWEEN_STAFF_LINES * 7.5,
  'B3': DISTANCE_BETWEEN_STAFF_LINES * 7,
  'C3': DISTANCE_BETWEEN_STAFF_LINES * 6.5,
  'D3': DISTANCE_BETWEEN_STAFF_LINES * 6,
  'E3': DISTANCE_BETWEEN_STAFF_LINES * 5.5,
  'F3': DISTANCE_BETWEEN_STAFF_LINES * 5,
  'G3': DISTANCE_BETWEEN_STAFF_LINES * 4.5,
  'A4': DISTANCE_BETWEEN_STAFF_LINES * 4,
  'B4': DISTANCE_BETWEEN_STAFF_LINES * 3.5,
  'C4': DISTANCE_BETWEEN_STAFF_LINES * 3,
  'D4': DISTANCE_BETWEEN_STAFF_LINES * 2.5,
  'E4': DISTANCE_BETWEEN_STAFF_LINES * 2,
  'F4': DISTANCE_BETWEEN_STAFF_LINES * 1.5,
  'G4': DISTANCE_BETWEEN_STAFF_LINES * 1,
  'A5': DISTANCE_BETWEEN_STAFF_LINES * 0.5,
  'B5': DISTANCE_BETWEEN_STAFF_LINES * 0,
  'C5': DISTANCE_BETWEEN_STAFF_LINES * -0.5,
  'D5': DISTANCE_BETWEEN_STAFF_LINES * -1,
  'E5': DISTANCE_BETWEEN_STAFF_LINES * -1.5,
  'F5': DISTANCE_BETWEEN_STAFF_LINES * -2,
  'G5': DISTANCE_BETWEEN_STAFF_LINES * -2.5,
  'A6': DISTANCE_BETWEEN_STAFF_LINES * -3,
  'B6': DISTANCE_BETWEEN_STAFF_LINES * -3.5,
  'C6': DISTANCE_BETWEEN_STAFF_LINES * -4,
  'D6': DISTANCE_BETWEEN_STAFF_LINES * -4.5,
  'E6': DISTANCE_BETWEEN_STAFF_LINES * -5,
  'F6': DISTANCE_BETWEEN_STAFF_LINES * -5.5,
  'G6': DISTANCE_BETWEEN_STAFF_LINES * -6,
  'A7': DISTANCE_BETWEEN_STAFF_LINES * -6.5,
  'B7': DISTANCE_BETWEEN_STAFF_LINES * -7,
  'C7': DISTANCE_BETWEEN_STAFF_LINES * -7.5
};
export const mapStaccatoPosition = {
  'A3': DISTANCE_BETWEEN_STAFF_LINES * 10,
  'B3': DISTANCE_BETWEEN_STAFF_LINES * 10,
  'C3': DISTANCE_BETWEEN_STAFF_LINES * 9,
  'D3': DISTANCE_BETWEEN_STAFF_LINES * 9,
  'E3': DISTANCE_BETWEEN_STAFF_LINES * 8,
  'F3': DISTANCE_BETWEEN_STAFF_LINES * 8,
  'G3': DISTANCE_BETWEEN_STAFF_LINES * 7,
  'A4': DISTANCE_BETWEEN_STAFF_LINES * 7,
  'B4': DISTANCE_BETWEEN_STAFF_LINES * 6,
  'C4': DISTANCE_BETWEEN_STAFF_LINES * 6,
  'D4': DISTANCE_BETWEEN_STAFF_LINES * 5,
  'E4': DISTANCE_BETWEEN_STAFF_LINES * 5,
  'F4': DISTANCE_BETWEEN_STAFF_LINES * 4,
  'G4': DISTANCE_BETWEEN_STAFF_LINES * 4,
  'A5': DISTANCE_BETWEEN_STAFF_LINES * 3,
  'B5': DISTANCE_BETWEEN_STAFF_LINES * 0,
  'C5': DISTANCE_BETWEEN_STAFF_LINES * 0,
  'D5': DISTANCE_BETWEEN_STAFF_LINES * -1,
  'E5': DISTANCE_BETWEEN_STAFF_LINES * -1,
  'F5': DISTANCE_BETWEEN_STAFF_LINES * -2,
  'G5': DISTANCE_BETWEEN_STAFF_LINES * -2,
  'A6': DISTANCE_BETWEEN_STAFF_LINES * -3,
  'B6': DISTANCE_BETWEEN_STAFF_LINES * -3,
  'C6': DISTANCE_BETWEEN_STAFF_LINES * -4,
  'D6': DISTANCE_BETWEEN_STAFF_LINES * -4,
  'E6': DISTANCE_BETWEEN_STAFF_LINES * -5,
  'F6': DISTANCE_BETWEEN_STAFF_LINES * -5,
  'G6': DISTANCE_BETWEEN_STAFF_LINES * -6,
  'A7': DISTANCE_BETWEEN_STAFF_LINES * -6,
  'B7': DISTANCE_BETWEEN_STAFF_LINES * -7,
  'C7': DISTANCE_BETWEEN_STAFF_LINES * -7
};
export const mapDottedPosition = {
  'A3': DISTANCE_BETWEEN_STAFF_LINES * 8,
  'B3': DISTANCE_BETWEEN_STAFF_LINES * 7,
  'C3': DISTANCE_BETWEEN_STAFF_LINES * 7,
  'D3': DISTANCE_BETWEEN_STAFF_LINES * 6,
  'E3': DISTANCE_BETWEEN_STAFF_LINES * 6,
  'F3': DISTANCE_BETWEEN_STAFF_LINES * 5,
  'G3': DISTANCE_BETWEEN_STAFF_LINES * 5,
  'A4': DISTANCE_BETWEEN_STAFF_LINES * 4,
  'B4': DISTANCE_BETWEEN_STAFF_LINES * 4,
  'C4': DISTANCE_BETWEEN_STAFF_LINES * 3,
  'D4': DISTANCE_BETWEEN_STAFF_LINES * 3,
  'E4': DISTANCE_BETWEEN_STAFF_LINES * 2,
  'F4': DISTANCE_BETWEEN_STAFF_LINES * 2,
  'G4': DISTANCE_BETWEEN_STAFF_LINES * 1,
  'A5': DISTANCE_BETWEEN_STAFF_LINES * 1,
  'B5': DISTANCE_BETWEEN_STAFF_LINES * 0,
  'C5': DISTANCE_BETWEEN_STAFF_LINES * 0,
  'D5': DISTANCE_BETWEEN_STAFF_LINES * -1,
  'E5': DISTANCE_BETWEEN_STAFF_LINES * -1,
  'F5': DISTANCE_BETWEEN_STAFF_LINES * -2,
  'G5': DISTANCE_BETWEEN_STAFF_LINES * -2,
  'A6': DISTANCE_BETWEEN_STAFF_LINES * -3,
  'B6': DISTANCE_BETWEEN_STAFF_LINES * -3,
  'C6': DISTANCE_BETWEEN_STAFF_LINES * -4,
  'D6': DISTANCE_BETWEEN_STAFF_LINES * -4,
  'E6': DISTANCE_BETWEEN_STAFF_LINES * -5,
  'F6': DISTANCE_BETWEEN_STAFF_LINES * -5,
  'G6': DISTANCE_BETWEEN_STAFF_LINES * -6,
  'A7': DISTANCE_BETWEEN_STAFF_LINES * -6,
  'B7': DISTANCE_BETWEEN_STAFF_LINES * -7,
  'C7': DISTANCE_BETWEEN_STAFF_LINES * -7
};

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
  { value: '2/2', label: '2/2' },
  { value: '2/4', label: '2/4' },
  { value: '3/4', label: '3/4' },
  { value: '4/4', label: '4/4' },
  { value: '3/8', label: '3/8' },
  { value: '6/8', label: '6/8' }
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
  { value: 'pedal-start', label: 'Pedal Start' },
  { value: 'pedal-continue', label: 'Continue' },
  { value: 'pedal-overlap', label: 'Overlap' },
  { value: 'pedal-end', label: 'End' },
  { value: '', label: 'Remove' }
];