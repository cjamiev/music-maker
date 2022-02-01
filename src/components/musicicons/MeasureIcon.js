import React from 'react';

const MeasureIcon = ({
  showRepeatBarStart,
  showRepeatBarEnd,
  showMeasureEnd
}) => {
  return (
    <g>
      <g transform="matrix(1.8471628,0,0,1.8471628,-365.81769,-56.595379)" id="staff" >
        <rect
          className="musicicon__staff-line"
          width="27.192894"
          height="0.073101997"
          x="198.7715"
          y="34.872143" />
        <rect
          className="musicicon__staff-line"
          width="27.192894"
          height="0.07310199"
          x="198.7715"
          y="39.899235" />
        <rect
          className="musicicon__staff-line"
          width="27.192894"
          height="0.07310199"
          x="198.7715"
          y="44.926311" />
        <rect
          className="musicicon__staff-line"
          width="27.192894"
          height="0.07310199"
          x="198.7715"
          y="49.953365" />
        <rect
          className="musicicon__staff-line"
          width="27.192894"
          height="0.073101684"
          x="198.76918"
          y="54.980465" />
      </g>
      {showRepeatBarStart && <g
        data-testid="repeat-bar-start"
        transform="matrix(1.8471628,0,0,1.8471628,-70.380038,-279.55505)"
      >
        <g
          data-testid="element-repeat-bar-start"
          transform="matrix(1,0,0,0.26264656,-159.94138,122.11752)"
        >
          <rect
            width="1.0516512"
            height="78.978127"
            x="-199.53009"
            y="126.27064"
            transform="scale(-1,1)"
          />
          <rect
            width="0.44599354"
            height="78.978127"
            x="-200.84798"
            y="126.27064"
            transform="scale(-1,1)"
          />
        </g>
        <g
          data-testid="element-repeat-start-dots"
          transform="translate(-159.94132,29.011438)"
        >
          <ellipse
            cx="-202.67708"
            cy="133.7086"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
          <ellipse
            cx="-202.67708"
            cy="138.45671"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
        </g>
      </g>}
      {showRepeatBarEnd && <g
        data-testid="repeat-bar-end"
        transform="matrix(-1.8471628,0,0,1.8471628,123.29671,-279.55505)"
      >
        <g
          data-testid="element-repeat-bar-end"
          transform="matrix(1,0,0,0.26264656,-159.94138,122.11752)"
        >
          <rect
            width="1.0516512"
            height="78.978127"
            x="-199.53009"
            y="126.27064"
            transform="scale(-1,1)"
          />
          <rect
            width="0.44599354"
            height="78.978127"
            x="-200.84798"
            y="126.27064"
            transform="scale(-1,1)"
          />
        </g>
        <g
          data-testid="element-repeat-end-dots"
          transform="translate(-159.94132,29.011438)"
        >
          <ellipse
            cx="-202.67708"
            cy="133.7086"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
          <ellipse
            cx="-202.67708"
            cy="138.45671"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
        </g>
      </g>}
      {showMeasureEnd && <g
        data-testid="measure-end"
        transform="matrix(1.8471628,0,0,1.8471628,-365.81976,-576.87182)"
      >
        <rect
          data-testid="element-measure-end"
          width="0.54693741"
          height="20.796249"
          x="225.71387"
          y="316.2272"
        />
      </g>}
    </g>
  );
};

export default MeasureIcon;