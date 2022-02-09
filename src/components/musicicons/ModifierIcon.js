/* eslint-disable complexity */
import React from 'react';

const ModifierIcon = ({
  showStaccato,
  showDotted,
  showAccent,
  showFermata,
  showGraceNote,
  showNoteFlat,
  showNoteNatural,
  showNoteSharp,
  showRolled,
  showTenuto,
  showTrill
}) => {
  return (
    <g>
      {showStaccato && <g
        data-testid="subcomponent-staccato"
        transform="matrix(3.3629984,0,0,3.3629984,-168.67955,-83.799986)">
        <g
          data-testid="element-whole-note"
          transform="translate(-317.3242,-26.27077)">
          <ellipse
            className="svg__1"
            data-testid="ellipse3050-3"
            cx="374.15756"
            cy="62.147362"
            rx="3.1077557"
            ry="2.4171433" />
          <ellipse
            className="svg__9"
            data-testid="ellipse3052-8"
            cx="337.9754"
            cy="172.13019"
            rx="1.5423677"
            ry="2.1869392"
            transform="rotate(-17.558954)" />
        </g>
        <ellipse
          className="svg__1"
          data-testid="subcomponent-staccato"
          cx="56.833611"
          cy="28.336035"
          rx="1.0583327"
          ry="1.0583323" />
      </g>}
      {showDotted && <g
        data-testid="subcomponent-dotted"
        transform="matrix(3.3629984,0,0,3.3629984,-168.67955,-83.799986)">
        <g
          data-testid="element-whole-note"
          transform="translate(-317.3242,-26.27077)">
          <ellipse
            className="svg__1"
            data-testid="ellipse3050-3"
            cx="374.15756"
            cy="62.147362"
            rx="3.1077557"
            ry="2.4171433" />
          <ellipse
            className="svg__9"
            data-testid="ellipse3052-8"
            cx="337.9754"
            cy="172.13019"
            rx="1.5423677"
            ry="2.1869392"
            transform="rotate(-17.558954)" />
        </g>
        <ellipse
          className="svg__1"
          data-testid="element-dotted"
          cx="61.86071"
          cy="33.363228"
          rx="1.0583327"
          ry="1.0583323" />
      </g>}
      {showAccent && <g
        data-testid="accent"
        transform="matrix(2.2245103,0,0,2.2245103,-163.66257,-90.441184)"
      >
        <path className="musicicon__accent" d="m 80.38,47.29 11.97,5.22" />
        <path className="musicicon__accent" d="M 80.38,57.80 92.36,52.58" />
        <path
          className="musicicon__accent"
          transform="matrix(0.303,0.378,-0.566,0.177,94.018,7.936)"
          d="M 93.691,52.791 93.023,52.457 93.647,52.046 Z"
        />
      </g>}
      {showFermata && <g
        data-testid="fermata"
        transform="matrix(2.0621214,0,0,2.0621214,-350.21288,-335.54034)">
        <path
          d="m 174.21272,179.75685 c 0,0 1.29878,-8.3831 8.64814,-8.42082 7.1648,-0.0368 8.22875,6.96542 8.25268,8.23439 0.024,1.27127 -0.45058,-6.37202 -8.2917,-6.29429 -8.18967,0.0812 -8.40343,6.58357 -8.60912,6.48072 z"
        />
        <path
          transform="rotate(-3.3018566)"
          d="m 172.983,188.28 a 0.876,0.834 0 0 1 -0.868,0.834 0.876,0.834 0 0 1 -0.883,-0.819 0.876,0.834 0 0 1 0.851,-0.849 0.876,0.834 0 0 1 0.899,0.803 l -0.875,0.0305 z"
        />
      </g>}
      {showRolled && <g
        data-testid="rolled"
        transform="matrix(1.3934153,0,0,1.3934153,-450.00124,-281.06957)"
      >
        <path d="m 340.12282,224.60846 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57834 -2.19852,1.67851 -2.70356,3.57022 -0.38904,1.45699 3.49815,4.63442 3.49815,4.63442 l -0.71961,-1.56769 c 0.0206,0.0539 -1.09795,-2.85781 2.9754,-5.81943 0.99653,-0.72454 -3.38773,-5.82792 -4.63306,-6.41261 z" />
        <path d="m 340.12282,213.82862 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57834 -2.19852,1.67851 -2.70356,3.57022 -0.38904,1.45699 3.49815,4.63442 3.49815,4.63442 l -0.71961,-1.5677 c 0.0206,0.0539 -1.09795,-2.8578 2.9754,-5.81943 0.99653,-0.72453 -3.38773,-5.82791 -4.63306,-6.4126 z" />
        <path d="m 340.12282,203.04877 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57835 -2.19852,1.67852 -2.70356,3.57023 -0.38904,1.45698 3.49815,4.63441 3.49815,4.63441 l -0.71961,-1.56769 c 0.0206,0.0539 -1.09795,-2.85781 2.9754,-5.81943 0.99653,-0.72453 -3.38773,-5.82792 -4.63306,-6.41261 z" />
      </g>}
      {showNoteFlat && <g
        data-testid="note-flat"
        transform="matrix(2.595187,0,0,2.595187,-738.69555,-217.66449)"
      >
        <rect
          width="0.4383156"
          height="14.251248"
          x="292.65439"
          y="86.800064"
        />
        <path d="m 293.20964,95.936626 c 0,0 1.81656,-1.65509 2.90649,-1.211043 0.92332,0.37617 0.76699,1.574343 0.76699,1.574343 -0.0879,2.141493 -4.08401,5.459224 -4.09633,4.806244 -0.0807,-4.279 0.44838,-5.131254 0.42285,-5.169544 z" />
        <path className="musicicon__flat-hole" d="m 293.06776,96.462211 c 0,0 1.4833,-1.29179 2.03825,-1.019629 0.55497,0.272162 0.31633,1.850919 0.31633,1.850919 -0.0525,1.604202 -2.31528,3.926209 -2.32264,3.437059 -0.0483,-3.205425 -0.0167,-4.68211 -0.0319,-4.268349 z" />
      </g>}
      {showGraceNote && <g
        data-testid="grace-note"
        transform="matrix(3.7788571,0,0,3.7788571,-2952.6279,-990.21098)">
        <rect
          width="0.2159626"
          height="6.2962098"
          x="789.01129"
          y="265.1727"
        />
        <ellipse
          cx="692.81122"
          cy="521.70508"
          rx="1.5859085"
          ry="1.0218173"
          transform="matrix(0.94215293,-0.33518331,0.25876348,0.96594071,0,0)"
        />
        <path
          d="m 789.22724,265.1727 c 0,0 -0.15673,1.31091 1.49252,1.90647 1.64925,0.59557 0.36242,3.73702 0.33188,3.69121 -0.0306,-0.0458 0.96511,-2.70713 -0.5304,-3.21781 -1.44332,-0.49285 -1.33237,-0.4303 -1.33237,-0.4303 l 0.0384,-1.94957"
        />
        <rect
          className="musicicon__grace-note-slash"
          data-testid="grace-note-slash"
          width="5.1266527"
          height="0.286024"
          x="-1423.6665"
          y="2025.2115"
          transform="matrix(0.81428481,-0.58046554,0.96145749,-0.27495361,0,0)"
        />
      </g>}
      {showNoteNatural && <g
        data-testid="note-natural"
        transform="matrix(1.3548244,0,0,1.7549311,-62.006725,-285.62058)"
      >
        <rect
          width="0.7267859"
          height="18.201654"
          x="61.165066"
          y="166.01704"
        />
        <rect
          width="7.9662356"
          height="2.2366626"
          x="36.048428"
          y="192.58131"
          transform="matrix(0.97014993,-0.24250592,0.13683522,0.99059382,0,0)"
        />
        <rect
          width="0.7267859"
          height="18.201654"
          x="68.700806"
          y="171.44075"
        />
        <rect
          width="7.9662356"
          height="2.2366626"
          x="37.248775"
          y="184.07086"
          transform="matrix(0.970,-0.243,0.137,0.991,0,0)"
        />
      </g>}
      {showNoteSharp && <g
        data-testid="note-sharp"
        transform="matrix(1.7060783,0,0,3.0696148,-175.0232,-289.07899)"
      >
        <rect
          width="0.50682449"
          height="12.692932"
          x="116.30758"
          y="96.447319"
        />
        <rect
          width="0.50682449"
          height="12.692932"
          x="119.34854"
          y="96.447319"
        />
        <rect
          width="6.571476"
          height="1.8450588"
          x="100.60621"
          y="125.54735"
          transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)"
        />
        <rect
          width="6.571476"
          height="1.8450588"
          x="99.805077"
          y="131.22731"
          transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)"
        />
      </g>}
      {showTrill && <text
        x="6.260199"
        y="20.693336"
        data-testid="trill"
        transform="scale(2.2,2)"
      >
        <tspan
          x="6.260199"
          y="20.693336"
        >
          tr
        </tspan>
      </text>}
      {showTenuto && <rect
        className="musicicon__tenuto"
        data-testid="tenuto"
        width="24.131603"
        height="0.94070297"
        x="14.392532"
        y="25.987982"
      />}
    </g>
  );
};

export default ModifierIcon;