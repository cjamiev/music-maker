import React, { useState } from 'react';
import Configuration from './Configuration';

const CreateSidePanel = ({ configuration, onConfigurationChange }) => {
  return (
    <div>
      <Configuration configuration={configuration} onChange={onConfigurationChange} />
    </div>
  );
};

export default CreateSidePanel;
