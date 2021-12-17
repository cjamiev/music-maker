import React, { useRef } from 'react';
import MusicNotationMapper from 'components/StaffSvg/MusicNotationMapper';

const Home = () => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <svg className="svg--primary-color" width="1920" height="1080" viewBox="0 0 508 285.75">
        <MusicNotationMapper parentRef={ref}/>
      </svg>
    </div>
  );
};

export default Home;
