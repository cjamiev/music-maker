import React, { useState } from 'react';
import Configuration from './Configuration';

const CreateSidePanel = ({ configuration, onConfigurationChange }) => {
  return (
    <div className="sidepanel">
      <Configuration configuration={configuration} onChange={onConfigurationChange} />
    </div>
  );
};

export default CreateSidePanel;
