import React from 'react';

export const StaccatoSVG = ({ transform }) => {
  return (
    <ellipse data-testid="subcomponent-staccato" transform={transform} className="svg__1" aria-label="staccato" cx="78.715851" cy="104.70904" rx="1.0583327" ry="1.0583323" />
  );
};

export const DottedSVG = ({ transform }) => {
  return (
    <ellipse data-testid="subcomponent-dotted" transform={transform} className="svg__1" aria-label="dotted" cx="85.74295" cy="109.73623" rx="1.0583327" ry="1.0583323" />
  );
};

export const TenutoSVG = ({ transform }) => {
  return (
    <rect data-testid="subcomponent-tenuto" transform={transform} className="svg__44" aria-label="tenuto" width="5" height="0.5489385" x="76.170599" y="97.043755" />
  );
};

export const TripletSVG = ({ transform }) => {
  return (
    <g transform={transform}>
      <g data-testid="subcomponent-triplet" aria-label="triplet" >
        <rect data-testid="element-triplet-left-bar" className="svg__10" aria-label="element triplet left bar" width="9.260416" height="0.62309355" x="64.822922" y="93.892601" />
        <rect data-testid="element-triplet-right-bar" className="svg__10" aria-label="element triplet right bar" width="9.260416" height="0.62309355" x="83.347763" y="93.892601" />
        <rect data-testid="element-triplet-start-bar" className="svg__10" aria-label="element triplet start bar" width="4.9036407" height="0.4714008" x="94.276756" y="64.822922" transform="matrix(0,1,1,0,0,0)" />
        <rect data-testid="element-triplet-end-bar" className="svg__10" aria-label="element triplet end bar" width="4.9036407" height="0.4714008" x="94.276817" y="92.136765" transform="matrix(0,1,1,0,0,0)" />
        <text data-testid="element-triplet-number" className="svg__26" aria-label="element triplet number" x="75.369492" y="98.056602" >
          <tspan data-testid="tspan10101-4" className="svg__27" x="75.869492" y="98.056602" >3
          </tspan>
        </text>
      </g>
    </g>
  );
};

export const ChordNotationSVG = ({ transform, content = {}, conditions = {} }) => {
  const { showChordNotationFlat, showChordNotationSharp, showChordNotationQuality } = conditions;

  return (
    <g data-testid="subcomponent-chord-notation" transform={transform} aria-label="chord notation" >
      <text data-testid="element-chord-notation-key" className="svg__30" aria-label="element chord notation key" x="69.375237" y="100.37735" >
        <tspan data-testid="tspan4578-3-5-4" className="svg__30" x="69.375237" y="100.37735" dx="0" >{content.value}
        </tspan>
      </text>
      { showChordNotationFlat && <g data-testid="chord-notation-flat" aria-label="condition chord notation flat" transform="matrix(0.68676507,0,0,0.68676507,-126.65052,31.03619)" >
        <rect data-testid="rect3703-7-3" className="svg__1" width="0.4383156" height="14.251248" x="292.65439" y="86.800064" />
        <path data-testid="path3705-2-5" className="svg__8" d="m 293.20964,95.936626 c 0,0 1.81656,-1.65509 2.90649,-1.211043 0.92332,0.37617 0.76699,1.574343 0.76699,1.574343 -0.0879,2.141493 -4.08401,5.459224 -4.09633,4.806244 -0.0807,-4.279 0.44838,-5.131254 0.42285,-5.169544 z" />
        <path data-testid="path3707-8-9" className="svg__9" d="m 293.06776,96.462211 c 0,0 1.4833,-1.29179 2.03825,-1.019629 0.55497,0.272162 0.31633,1.850919 0.31633,1.850919 -0.0525,1.604202 -2.31528,3.926209 -2.32264,3.437059 -0.0483,-3.205425 -0.0167,-4.68211 -0.0319,-4.268349 z" />
      </g> }
      { showChordNotationSharp && <g data-testid="chord-notation-sharp" aria-label="condition chord notation sharp" transform="matrix(0.45148,0,0,0.81231301,22.18274,12.26448)" >
        <rect data-testid="rect4180-4-1" className="svg__1" width="0.50682449" height="12.692932" x="116.30758" y="96.447319" />
        <rect data-testid="rect4182-1-3" className="svg__1" width="0.50682449" height="12.692932" x="119.34854" y="96.447319" />
        <rect data-testid="rect4184-4-8" className="svg__1" width="6.571476" height="1.8450588" x="100.60621" y="125.54735" transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)" />
        <rect data-testid="rect4186-9-9" className="svg__1" width="6.571476" height="1.8450588" x="99.805077" y="131.22731" transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)" />
      </g> }
      { content.suffix && <text data-testid="chord-notation-quality" className="svg__30" aria-label="condition chord notation quality" x="77.285515" y="100.44415" >
        <tspan data-testid="tspan4578-3-5-4-0" className="svg__30" x="77.285515" y="100.44415" dx="0 0 0" >{content.suffix}
        </tspan>
      </text> }
    </g>
  );
};

export const StemmedNoteSVG = ({ transform, conditions = {} }) => {
  const { showEighthNote, showHalfNote, showSixteenthNote } = conditions;

  return (
    <g data-testid="subcomponent-stemmed-note" transform={transform} aria-label="stemmed note" >
      <ellipse data-testid="element-note-head" className="svg__20" aria-label="note head" cx="47.138676" cy="132.56465" rx="3.9879844" ry="2.5694997" transform="matrix(0.94215293,-0.33518333,0.25876352,0.9659407,0,0)" />
      { showHalfNote && <ellipse data-testid="half-note" className="svg__21" aria-label="condition half note" cx="-62.477371" cy="156.10141" rx="3.6651206" ry="1.5457097" transform="matrix(0.87023416,-0.49263832,0.85255896,0.52263106,0,0)" /> }
      { <rect data-testid="note-stem" className="svg__20" aria-label="condition note stem" width="0.45734397" height="16.595196" x="82.046173" y="94.627319" /> }
      { showEighthNote && <path data-testid="eighth-note-flag" className="svg__31" aria-label="condition eighth note flag" d="m 82.49591,94.62796 c 0,0 -0.30133,3.29712 2.86944,4.79505 3.17077,1.49795 0.69676,9.39918 0.63805,9.28395 -0.0588,-0.11522 1.85547,-6.80885 -1.01972,-8.09327 -2.77486,-1.2396 -2.56154,-1.08227 -2.56154,-1.08227 l 0.0738,-4.90346" /> }
      { showSixteenthNote && <g data-testid="sixteenth-note-flag" aria-label="condition sixteenth note flag" >
        <rect data-testid="sixteength-note-stem" className="svg__20" width="0.45734397" height="16.595196" x="82.046814" y="87.363037" />
        <path data-testid="sixteength-note-flag" className="svg__31" aria-label="sixteength note flag" d="m 82.4961,87.3637 c 0,0 -0.30133,3.29712 2.86944,4.79505 3.17077,1.49795 0.69676,9.39918 0.63805,9.28395 -0.0588,-0.11522 1.85547,-6.80885 -1.01972,-8.09327 -2.77486,-1.2396 -2.56154,-1.08227 -2.56154,-1.08227 l 0.0738,-4.90346" />
      </g> }
    </g>
  );
};

export const StemmedNoteFlippedSVG = ({ transform, conditions = {} }) => {
  const { showEighthNote, showHalfNote, showSixteenthNote } = conditions;

  return (
    <g data-testid="subcomponent-stemmed-note-flipped" transform={transform} aria-label="stemmed note flipped" >
      <ellipse data-testid="element-note-head" className="svg__20" aria-label="note head" cx="-47.138428" cy="-132.52782" rx="3.9879844" ry="2.5694997" transform="matrix(-0.94215293,0.33518333,-0.25876352,-0.9659407,0,0)" />
      { showHalfNote && <ellipse data-testid="half-note" className="svg__21" aria-label="condition half note flipped" cx="62.230122" cy="-155.83528" rx="3.6651206" ry="1.5457097" transform="matrix(-0.87023416,0.49263832,-0.85255896,-0.52263106,0,0)" /> }
      { <rect data-testid="note-stem" className="svg__20" aria-label="condition note stem flipped" width="0.45734397" height="16.595196" x="74.956619" y="113.24069" /> }
      { showEighthNote && <path data-testid="eighth-note-flag" className="svg__31" aria-label="condition eighth note flag flipped" d="m 75.40634,129.83554 c 0,0 -0.30133,-3.29712 2.86944,-4.79505 3.17077,-1.49795 0.69676,-9.39918 0.63805,-9.28395 -0.0588,0.11522 1.85547,6.80885 -1.01972,8.09327 -2.77486,1.2396 -2.56154,1.08227 -2.56154,1.08227 l 0.0738,4.90346" /> }
      { showSixteenthNote && <g data-testid="sixteenth-note-flag" aria-label="condition sixteenth note flag flipped" transform="matrix(1,0,0,-1,-552.01334,421.78555)" >
        <rect data-testid="sixteength-note-stem-flipped" className="svg__20" aria-label="sixteength note stem flipped" width="0.45734397" height="16.595196" x="626.97058" y="284.68509" />
        <path data-testid="sixteength-note-flag-flipped" className="svg__31" aria-label="sixteength note flag flipped" d="m 627.41987,284.68575 c 0,0 -0.30133,3.29712 2.86944,4.79505 3.17077,1.49795 0.69676,9.39918 0.63805,9.28395 -0.0588,-0.11522 1.85547,-6.80885 -1.01972,-8.09327 -2.77486,-1.2396 -2.56154,-1.08227 -2.56154,-1.08227 l 0.0738,-4.90346" />
      </g> }
    </g>
  );
};

export const AccentSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-accent" transform={transform} aria-label="accent" >
      <g transform="matrix(0.58867276,0,0,0.58867276,27.6079,66.233071)" >
        <path data-testid="path1774-2" className="svg__32" d="m 80.384644,47.2925 11.97583,5.22465" />
        <path data-testid="path1776-3" className="svg__32" d="M 80.384644,57.80885 92.360474,52.5842" />
        <path data-testid="path1778-9" className="svg__32" transform="matrix(0.30347626,0.37790863,-0.5664694,0.17728172,94.017915,7.9363959)" d="M 93.690878,52.791369 93.023223,52.456865 93.646739,52.04591 Z" />
      </g>
    </g>
  );
};

export const FermataSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-fermata" transform={transform} aria-label="fermata" >
      <g transform="matrix(0.54569976,0,0,0.54569976,-20.96507,1.372411)" >
        <path data-testid="path1708-6" className="svg__33" d="m 174.21272,179.75685 c 0,0 1.29878,-8.3831 8.64814,-8.42082 7.1648,-0.0368 8.22875,6.96542 8.25268,8.23439 0.024,1.27127 -0.45058,-6.37202 -8.2917,-6.29429 -8.18967,0.0812 -8.40343,6.58357 -8.60912,6.48072 z" />
        <path data-testid="path3032-8" className="svg__34" transform="rotate(-3.3018566)" d="m 172.98276,188.28404 a 0.87554854,0.83385581 0 0 1 -0.86754,0.83382 0.87554854,0.83385581 0 0 1 -0.88341,-0.81856 0.87554854,0.83385581 0 0 1 0.85137,-0.8488 0.87554854,0.83385581 0 0 1 0.89899,0.80303 l -0.87496,0.0305 z" />
      </g>
    </g>
  );
};

export const RolledSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-rolled" transform={transform} aria-label="rolled" >
      <g transform="matrix(0.36873987,0,0,0.36873987,-54.14513,30.868401)" >
        <path data-testid="path1771" className="svg__35" d="m 340.12282,224.60846 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57834 -2.19852,1.67851 -2.70356,3.57022 -0.38904,1.45699 3.49815,4.63442 3.49815,4.63442 l -0.71961,-1.56769 c 0.0206,0.0539 -1.09795,-2.85781 2.9754,-5.81943 0.99653,-0.72454 -3.38773,-5.82792 -4.63306,-6.41261 z" />
        <path data-testid="path1773" className="svg__35" d="m 340.12282,213.82862 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57834 -2.19852,1.67851 -2.70356,3.57022 -0.38904,1.45699 3.49815,4.63442 3.49815,4.63442 l -0.71961,-1.5677 c 0.0206,0.0539 -1.09795,-2.8578 2.9754,-5.81943 0.99653,-0.72453 -3.38773,-5.82791 -4.63306,-6.4126 z" />
        <path data-testid="path1775" className="svg__35" d="m 340.12282,203.04877 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57835 -2.19852,1.67852 -2.70356,3.57023 -0.38904,1.45698 3.49815,4.63441 3.49815,4.63441 l -0.71961,-1.56769 c 0.0206,0.0539 -1.09795,-2.85781 2.9754,-5.81943 0.99653,-0.72453 -3.38773,-5.82792 -4.63306,-6.41261 z" />
      </g>
    </g>
  );
};

export const ChordLedgerSVG = ({ transform }) => {
  return (
    <rect data-testid="chord-ledger" className="svg__36" transform={transform} aria-label="chord ledger" width="9.4552097" height="0.17916849" x="73.985931" y="112.17" />
  );
};

const StaffTopLedger = ({ conditions = {} }) => {
  const { showTopLedgerFive, showTopLedgerFour, showTopLedgerThree, showTopLedgerTwo, showTopLedgerOne } = conditions;
  return (<>
    { showTopLedgerFive && <rect data-testid="staff-line-top-ledger-five" className="svg__36" aria-label="staff line top ledger five" width="9.4552097" height="0.17916849" x="73.985931" y="76.970314" /> }
    { showTopLedgerFour && <rect data-testid="staff-line-top-ledger-four" className="svg__36" aria-label="staff line top ledger four" width="9.4552097" height="0.17916849" x="73.985931" y="81.997368" /> }
    { showTopLedgerThree && <rect data-testid="staff-line-top-ledger-three" className="svg__36" aria-label="staff line top ledger three" width="9.4552097" height="0.17916857" x="73.985931" y="87.024467" /> }
    { showTopLedgerTwo && <rect data-testid="staff-line-top-ledger-two" className="svg__36" aria-label="staff line top ledger two" width="9.4552097" height="0.17916857" x="73.985931" y="92.051582" /> }
    { showTopLedgerOne && <rect data-testid="staff-line-top-ledger-one" className="svg__36" aria-label="staff line top ledger one" width="9.4552097" height="0.17916857" x="73.985931" y="97.078636" /> }
  </>);
};

const StaffBottomLedger = ({ conditions = {} }) => {
  const { showBottomLedgerFive, showBottomLedgerFour, showBottomLedgerThree, showBottomLedgerTwo, showBottomLedgerOne } = conditions;
  return (
    <>
      { showBottomLedgerOne && <rect data-testid="staff-line-bottom-ledger-one" className="svg__37" aria-label="staff line bottom ledger one" width="9.4552097" height="0.17916749" x="73.985931" y="127.24142" /> }
      { showBottomLedgerTwo && <rect data-testid="staff-line-bottom-ledger-two" className="svg__36" aria-label="staff line bottom ledger two" width="9.4552097" height="0.17916857" x="73.985931" y="132.26854" /> }
      { showBottomLedgerThree && <rect data-testid="staff-line-bottom-ledger-three" className="svg__36" aria-label="staff line bottom ledger three" width="9.4552097" height="0.17916857" x="73.985931" y="137.29558" /> }
      { showBottomLedgerFour && <rect data-testid="staff-line-bottom-ledger-four" className="svg__36" aria-label="staff line bottom ledger four" width="9.4552097" height="0.17916857" x="73.985931" y="142.32262" /> }
      { showBottomLedgerFive && <rect data-testid="staff-line-bottom-ledger-five" className="svg__36" aria-label="staff line bottom ledger five" width="9.4552097" height="0.17916857" x="73.985931" y="147.34975" /> }
    </>
  );
};

export const StaffSVG = ({ transform, conditions = {} }) => {
  return (
    <g data-testid="subcomponent-staff" transform={transform} aria-label="staff" >
      <StaffTopLedger conditions={conditions} />
      <rect data-testid="staff-line-five" className="svg__0" aria-label="staff line five" width="27.192894" height="0.073101997" x="65.119415" y="102.15884" />
      <rect data-testid="staff-line-four" className="svg__0" aria-label="staff line four" width="27.192894" height="0.07310199" x="65.119415" y="107.18609" />
      <rect data-testid="staff-line-three" className="svg__0" aria-label="staff line three" width="27.192894" height="0.07310199" x="65.119415" y="112.21325" />
      <rect data-testid="staff-line-two" className="svg__0" aria-label="staff line two" width="27.192894" height="0.07310199" x="65.119415" y="117.24029" />
      <rect data-testid="staff-line-one" className="svg__0" aria-label="staff line one" width="27.192894" height="0.073101684" x="65.117096" y="122.26739" />
      <StaffBottomLedger conditions={conditions} />
    </g>
  );
};

export const WholeNoteSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-whole-note" transform={transform} aria-label="whole note" >
      <ellipse data-testid="ellipse3050-3" className="svg__1" cx="78.715599" cy="112.24959" rx="3.1077557" ry="2.4171433" />
      <ellipse data-testid="ellipse3052-8" className="svg__9" cx="41.183769" cy="130.76701" rx="1.5423677" ry="2.1869392" transform="rotate(-17.558954)" />
    </g>
  );
};

export const NoteFlatSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-note-flat" transform={transform} aria-label="note flat" >
      <rect data-testid="rect3703-7" className="svg__1" width="0.30101985" height="9.7872591" x="70.411926" y="104.74508" />
      <path data-testid="path3705-2" className="svg__38" d="m 70.793256,111.01975 c 0,0 1.24755,-1.13665 1.996076,-0.8317 0.634104,0.25834 0.526742,1.0812 0.526742,1.0812 -0.06037,1.47071 -2.804756,3.74921 -2.813217,3.30077 -0.05542,-2.93867 0.307932,-3.52397 0.290399,-3.55027 z" />
      <path data-testid="path3707-8" className="svg__9" d="m 70.695818,111.38071 c 0,0 1.018678,-0.88716 1.399799,-0.70025 0.381134,0.18691 0.217244,1.27115 0.217244,1.27115 -0.03606,1.10171 -1.590053,2.69638 -1.595108,2.36045 -0.03317,-2.20137 -0.01147,-3.21551 -0.02191,-2.93135 z" />
    </g>
  );
};

export const FingerNumberSVG = ({ transform, content = {} }) => {
  return (
    <text data-testid="subcomponent-finger-number" transform={transform} className="svg__39" aria-label="finger number" x="77.389923" y="126.77639" >
      <tspan data-testid="tspan5559-9" className="svg__39" x="77.389923" y="126.77639" >{content.value}
      </tspan>
    </text>
  );
};

export const GraceNoteSVG = ({ transform, conditions = {} }) => {
  const { showGraceNoteSlash, showGraceNoteBottomSlur, showGraceNoteUpperSlur } = conditions;

  return (
    <g data-testid="subcomponent-grace-note" transform={transform} aria-label="grace note" >
      <g data-testid="element-grace-note" aria-label="element grace note" >
        <rect data-testid="rect2031" className="svg__20" width="0.2159626" height="6.2962098" x="73.225632" y="103.39078" />
        <ellipse data-testid="ellipse2033" className="svg__20" cx="41.180836" cy="128.10167" rx="1.5859085" ry="1.0218173" transform="matrix(0.94215293,-0.33518331,0.25876348,0.96594071,0,0)" />
        <path data-testid="path2035" className="svg__40" aria-label="path2035" d="m 73.44158,103.39078 c 0,0 -0.15673,1.31091 1.49252,1.90647 1.64925,0.59557 0.36242,3.73702 0.33188,3.69121 -0.0306,-0.0458 0.96511,-2.70713 -0.5304,-3.21781 -1.44332,-0.49285 -1.33237,-0.4303 -1.33237,-0.4303 l 0.0384,-1.94957" />
        { showGraceNoteSlash && <rect data-testid="grace-note-slash" className="svg__41" aria-label="condition grace note slash" width="5.1266527" height="0.286024" x="-369.35242" y="387.80417" transform="matrix(0.81428481,-0.58046554,0.96145749,-0.27495361,0,0)" /> }
      </g>
      { showGraceNoteBottomSlur && <path data-testid="grace-note-bottom-slur" className="svg__42" aria-label="condition grace note bottom slur" d="m 71.45069,111.72976 c 0,0 0.93244,4.88317 7.45471,3.41747" /> }
      { showGraceNoteUpperSlur && <path data-testid="grace-note-upper-slur" className="svg__43" aria-label="condition grace note upper slur" d="m 79.38844,106.49808 c 0,0 -0.56665,-4.4763 -5.3372,-3.32604" /> }
    </g>
  );
};

export const FlippedFermataSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-flipped-fermata" transform={transform} aria-label="flipped fermata" >
      <g transform="matrix(0.54569975,0,0,-0.54569975,-20.96507,223.12753)" >
        <path data-testid="path1708-0-0" className="svg__33" d="m 174.21272,179.75685 c 0,0 1.29878,-8.3831 8.64814,-8.42082 7.1648,-0.0368 8.22875,6.96542 8.25268,8.23439 0.024,1.27127 -0.45058,-6.37202 -8.2917,-6.29429 -8.18967,0.0812 -8.40343,6.58357 -8.60912,6.48072 z" />
        <path data-testid="path3032-1-9" className="svg__34" transform="rotate(-3.3018566)" d="m 172.98276,188.28404 a 0.87554854,0.83385581 0 0 1 -0.86754,0.83382 0.87554854,0.83385581 0 0 1 -0.88341,-0.81856 0.87554854,0.83385581 0 0 1 0.85137,-0.8488 0.87554854,0.83385581 0 0 1 0.89899,0.80303 l -0.87496,0.0305 z" />
      </g>
    </g>
  );
};

export const NoteNaturalSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-note-natural" transform={transform} aria-label="note natural" >
      <g transform="matrix(0.35852757,0,0,0.46440792,48.52996,29.664061)" >
        <rect data-testid="rect1634-7" className="svg__1" width="0.7267859" height="18.201654" x="61.165066" y="166.01704" />
        <rect data-testid="rect1636-3" className="svg__1" width="7.9662356" height="2.2366626" x="36.048428" y="192.58131" transform="matrix(0.97014993,-0.24250592,0.13683522,0.99059382,0,0)" />
        <rect data-testid="rect1638-9" className="svg__1" width="0.7267859" height="18.201654" x="68.700806" y="171.44075" />
        <rect data-testid="rect1640-0" className="svg__1" width="7.9662356" height="2.2366626" x="37.248775" y="184.07086" transform="matrix(0.97014993,-0.24250592,0.13683522,0.99059382,0,0)" />
      </g>
    </g>
  );
};

export const NoteSharpSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-note-sharp" aria-label="note sharp" transform={transform} >
      <g transform='matrix(0.45148001,0,0,0.812313,18.60746,28.748861)' >
        <rect data-testid="rect4180-4" className="svg__1" width="0.50682449" height="12.692932" x="116.30758" y="96.447319" />
        <rect data-testid="rect4182-1" className="svg__1" width="0.50682449" height="12.692932" x="119.34854" y="96.447319" />
        <rect data-testid="rect4184-4" className="svg__1" width="6.571476" height="1.8450588" x="100.60621" y="125.54735" transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)" />
        <rect data-testid="rect4186-9" className="svg__1" width="6.571476" height="1.8450588" x="99.805077" y="131.22731" transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)" />
      </g>
    </g>
  );
};

export const TrillSVG = ({ transform }) => {
  return (
    <g data-testid="subcomponent-trill" transform={transform} aria-label="trill" >
      <text className="svg__18" x="86.599037" y="88.25956" transform="scale(0.87702874,1.1402135)" >
        <tspan data-testid="tspan1973-9" className="svg__19" x="86.599037" y="88.25956" >tr
        </tspan>
      </text>
    </g>
  );
};

export const NoteSVG = ({ className = '', transform, subcomponents = [] }) => {
  const renderData = subcomponents.map(item => {
    const SvgComponent = item.component;
    const key = SvgComponent.name + item.transform + JSON.stringify(item.subcomponents);

    return <SvgComponent key={key} transform={item.transform} content={item.content} conditions={item.conditions} />;
  });

  return (
    <g className={className} data-testid="component-note" aria-label="note" transform={transform} >
      {renderData}
    </g>
  );
};
