import React from 'react';
import './sheet-music.css';

const SheetMusic = ({ pianoKey, noteType }) => {

  return (
    <div class="staff-container">
      {'Piano Key: ' + pianoKey}<br />
      {'Note Type: ' + noteType}
    </div>
  );
};

export default SheetMusic;