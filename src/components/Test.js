/* eslint-disable no-magic-numbers */
import React from 'react';
import './svg.css';

// const mapKeySignature = {
//   '': {},
//   '1#': {
//     showSharp1: true
//   },
//   '2#': {
//     showSharp1: true,
//     showSharp2: true
//   },
//   '3#': {
//     showSharp1: true,
//     showSharp2: true,
//     showSharp3: true
//   },
//   '4#': {
//     showSharp1: true,
//     showSharp2: true,
//     showSharp3: true,
//     showSharp4: true
//   },
//   '5#': {
//     showSharp1: true,
//     showSharp2: true,
//     showSharp3: true,
//     showSharp4: true,
//     showSharp5: true
//   },
//   '6#': {
//     showSharp1: true,
//     showSharp2: true,
//     showSharp3: true,
//     showSharp4: true,
//     showSharp5: true,
//     showSharp6: true
//   },
//   '7#': {
//     showSharp1: true,
//     showSharp2: true,
//     showSharp3: true,
//     showSharp4: true,
//     showSharp5: true,
//     showSharp6: true,
//     showSharp7: true
//   },
//   '1b': {
//     showFlat1: true
//   },
//   '2b': {
//     showFlat1: true,
//     showFlat2: true
//   },
//   '3b': {
//     showFlat1: true,
//     showFlat2: true,
//     showFlat3: true
//   },
//   '4b': {
//     showFlat1: true,
//     showFlat2: true,
//     showFlat3: true,
//     showFlat4: true
//   },
//   '5b': {
//     showFlat1: true,
//     showFlat2: true,
//     showFlat3: true,
//     showFlat4: true,
//     showFlat5: true
//   },
//   '6b': {
//     showFlat1: true,
//     showFlat2: true,
//     showFlat3: true,
//     showFlat4: true,
//     showFlat5: true,
//     showFlat6: true
//   },
//   '7b': {
//     showFlat1: true,
//     showFlat2: true,
//     showFlat3: true,
//     showFlat4: true,
//     showFlat5: true,
//     showFlat6: true,
//     showFlat7: true
//   }
// };

// const {
//   showSharp1,
//   showSharp2,
//   showSharp3,
//   showSharp4,
//   showSharp5,
//   showSharp6,
//   showSharp7,
//   showFlat1,
//   showFlat2,
//   showFlat3,
//   showFlat4,
//   showFlat5,
//   showFlat6,
//   showFlat7
// } = mapKeySignature[type];

const STAFF_LINE_WIDTH = 27.192894;
const STAFF_LINE_HEIGHT = 0.073101997;
const STAFF_LINE_BASE_Y = 0.24114455;
const DISTANCE_BETWEEN_STAFF_LINES = 5.02696235;
const NOTE_STEM_BASE_X = 11.45319;
const NOTE_STEM_BASE_Y = 36.50481;
const NOTE_STEM_WIDTH = 0.45734397;
const NOTE_STEM_HEIGHT = 16.595196;
const NOTE_BEAM_HEIGHT= 3;

const Staff = () => {
  return (
    <g data-testid="g959" >
      <rect data-testid="rect813-2-4" className="svg__1" width="7.4552097" height="0.17916849" x="10.163049" y="0.24114455" />
      <rect data-testid="rect811-9-1" className="svg__1" width="7.4552097" height="0.17916849" x="10.163049" y="5.2681069" />
      <rect data-testid="rect805-1-9" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="10.295145" />
      <rect data-testid="rect807-7-2" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="15.322245" />
      <rect data-testid="rect809-4-4" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="20.349314" />
      <rect data-testid="rect795-3-3" className="svg__0" width="27.192894" height="0.073101997" x="0.29650253" y="25.429422" />
      <rect data-testid="rect797-3-2" className="svg__0" width="27.192894" height="0.07310199" x="0.29650253" y="30.456522" />
      <rect data-testid="rect799-2-7" className="svg__0" width="27.192894" height="0.07310199" x="0.29650253" y="35.483593" />
      <rect data-testid="rect801-5-7" className="svg__0" width="27.192894" height="0.07310199" x="0.29650253" y="40.510662" />
      <rect data-testid="rect803-0-2" className="svg__0" width="27.192894" height="0.073101684" x="0.29418319" y="45.537762" />
      <rect data-testid="rect815-4-0" className="svg__1" width="7.4552088" height="0.17916749" x="10.163049" y="50.511806" />
      <rect data-testid="rect817-7-0" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="55.538937" />
      <rect data-testid="rect819-9-5" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="60.56599" />
      <rect data-testid="rect821-3-7" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="65.59301" />
      <rect data-testid="rect823-7-5" className="svg__1" width="7.4552097" height="0.17916857" x="10.163049" y="70.620293" />
    </g>
  );
};

const Slur = ({ noteCount }) => {
  return (
    <path className="svg__curve" d={`
      M${NOTE_STEM_BASE_X } ${NOTE_STEM_BASE_Y - DISTANCE_BETWEEN_STAFF_LINES}
      C${NOTE_STEM_BASE_X + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (noteCount - 1)/2 * 0.25} ${NOTE_STEM_BASE_Y - 2*DISTANCE_BETWEEN_STAFF_LINES}
      ${NOTE_STEM_BASE_X + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (noteCount - 1)/2 * 0.75} ${NOTE_STEM_BASE_Y - 2*DISTANCE_BETWEEN_STAFF_LINES}
      ${NOTE_STEM_BASE_X + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (noteCount - 1)/2} ${NOTE_STEM_BASE_Y - DISTANCE_BETWEEN_STAFF_LINES}
      `}
    />
  );
};

const NoteBeam = ({ noteCount, peakNoteMultipler, isAngle }) => {
  const baseX = NOTE_STEM_BASE_X;
  const baseY = NOTE_STEM_BASE_Y + NOTE_STEM_HEIGHT + peakNoteMultipler * DISTANCE_BETWEEN_STAFF_LINES;
  const angleModifier = isAngle ? (noteCount - 1) * DISTANCE_BETWEEN_STAFF_LINES : 0;

  const originCoord = {
    x: baseX,
    y: baseY - NOTE_BEAM_HEIGHT
  };
  const secondCoord = {
    x: baseX,
    y: baseY
  };
  const thirdCoord = {
    x: baseX + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (noteCount - 1)/2,
    y: baseY + angleModifier
  };
  const finalCoord = {
    x: baseX + NOTE_STEM_WIDTH + STAFF_LINE_WIDTH * (noteCount - 1)/2,
    y: baseY + angleModifier - NOTE_BEAM_HEIGHT
  };

  return (
    <path className="svg-primary-color" d={`
      M${originCoord.x} ${originCoord.y}
      L${secondCoord.x} ${secondCoord.y}
      L${thirdCoord.x} ${thirdCoord.y}
      L${finalCoord.x} ${finalCoord.y}
      Z`}
    />
  );
};

const TestBeam = () => {
  const multiply = 2;
  return (
    <svg className="svg--primary-color" width="1920" height="1080" viewBox="0 0 500 500">
      <g transform='scale(6)'>
        <NoteBeam noteCount={4} peakNoteMultipler={multiply} isAngle={true} />
        <Slur noteCount={4} />
        <Staff />
        <g data-testid="g1547" >
          <rect data-testid="condition-quarter-note-stem-flipped-2" className="svg__1" width="0.45734397" height={NOTE_STEM_HEIGHT + multiply * DISTANCE_BETWEEN_STAFF_LINES} x="11.45319" y="36.50481" />
          <ellipse data-testid="element-quarter-note-flipped-6" className="svg__2" cx="4.97363" cy="38.489765" rx="3.3584781" ry="2.1639023" transform="matrix(0.94215292,-0.33518334,0.25876352,0.9659407,0,0)" />
        </g>
        <g transform={`translate(${STAFF_LINE_WIDTH/2},0)`}>
          <Staff />
          <g data-testid="g1547" transform={`translate(0,${5*DISTANCE_BETWEEN_STAFF_LINES})`}>
            <rect data-testid="condition-quarter-note-stem-flipped-2" className="svg__2" width="0.45734397" height="16.595196" x="11.45319" y="36.50481" />
            <ellipse data-testid="element-quarter-note-flipped-6" className="svg__2" cx="4.97363" cy="38.489765" rx="3.3584781" ry="2.1639023" transform="matrix(0.94215292,-0.33518334,0.25876352,0.9659407,0,0)" />
          </g>
        </g>
        <g transform={`translate(${STAFF_LINE_WIDTH},0)`}>
          <Staff />
          <g data-testid="g1547" transform={`translate(0,${DISTANCE_BETWEEN_STAFF_LINES})`}>
            <rect data-testid="condition-quarter-note-stem-flipped-2" className="svg__1" width="0.45734397" height={NOTE_STEM_HEIGHT + 3 * DISTANCE_BETWEEN_STAFF_LINES} x="11.45319" y="36.50481" />
            <ellipse data-testid="element-quarter-note-flipped-6" className="svg__2" cx="4.97363" cy="38.489765" rx="3.3584781" ry="2.1639023" transform="matrix(0.94215292,-0.33518334,0.25876352,0.9659407,0,0)" />
          </g>
        </g>
        <g transform={`translate(${3*STAFF_LINE_WIDTH/2},0)`}>
          <Staff />
          <g data-testid="g1547" transform={`translate(0,${-DISTANCE_BETWEEN_STAFF_LINES})`}>
            <rect data-testid="condition-quarter-note-stem-flipped-2" className="svg__1" width="0.45734397" height={NOTE_STEM_HEIGHT + 6 * DISTANCE_BETWEEN_STAFF_LINES} x="11.45319" y="36.50481" />
            <ellipse data-testid="element-quarter-note-flipped-6" className="svg__2" cx="4.97363" cy="38.489765" rx="3.3584781" ry="2.1639023" transform="matrix(0.94215292,-0.33518334,0.25876352,0.9659407,0,0)" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TestBeam;
