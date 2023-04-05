import React from 'react';

const SidePanel = ({ animation, sidePanelContent, isSidePanelWide, toggleSidePanel, title }) => {
  if(!sidePanelContent) {
    return null;
  }

  return (
    <div className="sidepanel">
      {sidePanelContent}
    </div>
  );
};

export default SidePanel;
