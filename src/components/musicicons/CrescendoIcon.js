import React from 'react';

const CrescendoIcon = ({
  showCrescendo,
  showDecrescendo
}) => {
  return (
    <g>
      {showCrescendo && <path
        className="musicicon__crescendo"
        d="m 51.221164,21.757146 -49.52566,4.917971 49.52566,4.48411"
        data-testid="crescendo"
      />}
      {showDecrescendo && <path
        className="musicicon__crescendo"
        d="m 1.695489,21.757149 49.52569,4.917964 -49.52567,4.484111"
        data-testid="decrescendo"
      />}
    </g>
  );
};

export default CrescendoIcon;