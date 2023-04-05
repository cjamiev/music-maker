import React from 'react';

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

export const ChordLedgerSVG = ({ transform }) => {
  return (
    <rect data-testid="chord-ledger" className="svg__36" transform={transform} aria-label="chord ledger" width="9.4552097" height="0.17916849" x="73.985931" y="112.17" />
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