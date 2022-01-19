import React, { useState } from 'react';
import Configuration from './Configuration';


const CreateSidePanel = ({ onChange }) => {
  return (
    <div className="sidepanel">
      <Configuration onChange={onChange} />
    </div>
  );
};

export default CreateSidePanel;
