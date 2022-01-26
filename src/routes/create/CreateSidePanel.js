import React, { useState } from 'react';
import Configuration from './Configuration';


const CreateSidePanel = ({ configuration, onChange }) => {
  return (
    <div className="sidepanel">
      <Configuration configuration={configuration} onChange={onChange} />
    </div>
  );
};

export default CreateSidePanel;
