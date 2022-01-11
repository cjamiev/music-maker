import React, { useRef } from 'react';
import MusicNotationMapper from 'components/StaffSvg/MusicNotationMapper';

const Home = () => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <svg className="svg--primary-color"
        width="5000"
        height="3000"
        viewBox="0 0 1322.9166 793.75005">
        <MusicNotationMapper parentRef={ref}/>
      </svg>
    </div>
  );
};

export default Home;
