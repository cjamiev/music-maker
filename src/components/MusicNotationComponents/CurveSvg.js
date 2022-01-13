import React, { useState } from 'react';
import useDrag from 'hooks/useDrag';

const CurveSvg = ({ transform, reference, dataid }) => {
  const [startCoord, setStartCoord] = useState({ x: 100, y: 100 });
  const [controlPointOneCoord, setControlPointOneCoord] = useState({ x: 100, y: 80 });
  const [controlPointTwoCoord, setControlPointTwoCoord] = useState({ x: 200, y: 80 });
  const [endCoord, setEndCoord] = useState({ x: 200, y: 100 });
  const [controller, setController] = useState({ current: null, onChange: null});
  const curveStartPointId = `curve-start-point-${dataid}`;
  const curveEndPointId = `curve-end-point-${dataid}`;
  const curveControlPointOneId = `curve-control-point-one-${dataid}`;
  const curveControlPointTwoId = `curve-control-point-two-${dataid}`;

  const handleStartCoordDrag = (e) => {
    setStartCoord({
      x: startCoord.x + e.movementX,
      y: startCoord.y + e.movementY
    });
  };

  const handleControlPointOneCoordDrag = (e) => {
    setControlPointOneCoord({
      x: controlPointOneCoord.x + e.movementX,
      y: controlPointOneCoord.y + e.movementY
    });
  };

  const handleControlPointTwoCoordDrag = (e) => {
    setControlPointTwoCoord({
      x: controlPointTwoCoord.x + e.movementX,
      y: controlPointTwoCoord.y + e.movementY
    });
  };

  const handleEndCoordDrag = (e) => {
    setEndCoord({
      x: endCoord.x + e.movementX,
      y: endCoord.y + e.movementY
    });
  };

  useDrag(reference, curveStartPointId, handleStartCoordDrag);
  useDrag(reference, curveControlPointOneId, handleControlPointOneCoordDrag);
  useDrag(reference, curveControlPointTwoId, handleControlPointTwoCoordDrag);
  useDrag(reference, curveEndPointId, handleEndCoordDrag);

  return (
    <g transform={transform}>
      <circle
        data-testid={curveStartPointId}
        className="svg__drag-point"
        cx={startCoord.x}
        cy={startCoord.y}
        r="8"
        onClick={() => { setController({ current: startCoord, onChange: setStartCoord });}}
      />
      <circle
        data-testid={curveEndPointId}
        className="svg__drag-point"
        cx={endCoord.x}
        cy={endCoord.y}
        r="8"
        onClick={() => { setController({ current: endCoord, onChange: setEndCoord });}}
      />
      <circle
        data-testid={curveControlPointOneId}
        className="svg__drag-point"
        cx={controlPointOneCoord.x}
        cy={controlPointOneCoord.y}
        r="4"
        onClick={() => { setController({ current: controlPointOneCoord, onChange: setControlPointOneCoord });}}
      />
      <circle
        data-testid={curveControlPointTwoId}
        className="svg__drag-point"
        cx={controlPointTwoCoord.x}
        cy={controlPointTwoCoord.y}
        r="4"
        onClick={() => { setController({ current: controlPointTwoCoord, onChange: setControlPointTwoCoord });}}
      />
      <line data-testid="control-point-one-line-reference" className="svg__reference-line" x1={startCoord.x} y1={startCoord.y} x2={controlPointOneCoord.x} y2={controlPointOneCoord.y} />
      <line data-testid="control-point-two-line-reference" className="svg__reference-line" x1={endCoord.x} y1={endCoord.y} x2={controlPointTwoCoord.x} y2={controlPointTwoCoord.y} />
      <path data-testid="svg-curve" className="svg__curve" d={`M${startCoord.x},${startCoord.y} C${controlPointOneCoord.x},${controlPointOneCoord.y} ${controlPointTwoCoord.x},${controlPointTwoCoord.y} ${endCoord.x},${endCoord.y}`} />
    </g>
  );
};

export default CurveSvg;
