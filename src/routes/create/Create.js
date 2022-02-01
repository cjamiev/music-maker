import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import MusicForm from 'components/musicform';
import CreateSidePanel from './CreateSidePanel';
import ColumnPositionController from './ColumnPositionController';
import LinePositionController from './LinePositionController';
import Page from 'components/layout';
import {
  getSheetMusic
} from './helper';

const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};
const ZERO = 0;
const ONE = 1;
const STARTING_NOTE = {
  id: '001',
  pageIndex: ZERO,
  lineIndex: ZERO,
  columnIndex: ZERO,
  component: 'Note',
  pianoKey: 'C4'
};

const getUpdatedSheetMusic = ({ editorPosition, currentLine, data, update }) => {
  const currentSection = editorPosition.isBassSelection ? currentLine.bass : currentLine.treble;
  const updatedSection = currentSection.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex) {
      return {
        ...item,
        ...update
      };
    }
    return item;
  });
  const updatedLine = editorPosition.isBassSelection
    ? {
      ...currentLine,
      bass: updatedSection
    }
    : {
      ...currentLine,
      treble: updatedSection
    };
  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

const Create = () => {
  const [editorPosition, setEditorPositon] = useState({
    pageIndex: ZERO,
    lineIndex: ZERO,
    columnIndex: ZERO,
    isBassSelection: false
  });
  const [configuration, setConfiguration] = useState({
    title: '',
    subtitle: '',
    tempo: '',
    author: '',
    keySignature: '',
    timeSignature: {
      numerator: 4,
      denominator: 4,
      commonTime: true,
      cutTime: false
    }
  });
  const [data, setData] = useState([{
    treble: [STARTING_NOTE],
    center: [],
    bass: [STARTING_NOTE],
    bottom: []
  }]);

  const currentLine = data[editorPosition.lineIndex];

  const handleConfigurationChange = (updatedConfig) => {
    setConfiguration({
      ...configuration,
      ...updatedConfig
    });
  };

  const handlePositionChange = (updatedEditorPosition, updatedData) => {
    setEditorPositon(updatedEditorPosition);
    updatedData && setData(updatedData);
  };

  const handlePianoKeyChange = (selectedPianoKey) => {
    const updatedData = getUpdatedSheetMusic({ editorPosition, currentLine, data, update: {
      component: 'Note',
      pianoKey: selectedPianoKey
    } });

    setData(updatedData);
  };

  const handleRestChange = (selectedRestSymbol) => {
    const updatedData = getUpdatedSheetMusic({ editorPosition, currentLine, data, update: {
      component: 'Rest',
      conditions: selectedRestSymbol
    } });
    setData(updatedData);
  };

  // <CreateSidePanel configuration={configuration} onConfigurationChange={handleConfigurationChange} />
  return (
    <Page >
      <div className="create__grid">
        <div className="create__sheet-music">
          <DisplaySheetMusic
            isOneLineMode={true}
            sheetMusic={getSheetMusic(configuration, data[editorPosition.lineIndex], editorPosition)}
            {...attributes}
          />
        </div>
        <div className="create__position-controller">
          <ColumnPositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
          <LinePositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
        </div>
        <div className="create__sheet-music-form">
          <MusicForm selectRestSymbol={handleRestChange} selectPianoKey={handlePianoKeyChange} />
        </div>
      </div>
    </Page>
  );
};

export default Create;
