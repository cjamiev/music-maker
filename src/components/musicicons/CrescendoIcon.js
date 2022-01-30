import React from 'react';

const CrescendoIcon = ({
  showCrescendo,
  showDecrescendo
}) => {
  return (
    <g>
      {showCrescendo && <path
        style="fill:none;stroke:#000000;stroke-width:0.718272;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 51.221164,21.757146 -49.52566,4.917971 49.52566,4.48411"
        data-testid="crescendo"
      />}
      {showDecrescendo && <path
        style="fill:none;stroke:#000000;stroke-width:0.71827;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 1.695489,21.757149 49.52569,4.917964 -49.52567,4.484111"
        data-testid="decrescendo"
      />}
    </g>
  );
};

export default CrescendoIcon;