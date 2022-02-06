import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import MusicForm from 'components/musicform';
import Configuration from './Configuration';
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
  pianoKey: 'C4',
  noteType: 'quarter-note'
};

const getUpdatedSymbols = ({ editorPosition, currentLine, data, update }) => {
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

const getUpdatedDynamics = ({ editorPosition, currentLine, data, update }) => {
  const matched = currentLine.center.find(item => item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = (matched || update.shouldRemove) ? currentLine.center.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex) {
      return {
        ...item,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentLine.center.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = {
    ...currentLine,
    center: updatedSection
  };

  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

const getUpdatedPedal = ({ editorPosition, currentLine, data, update }) => {
  const matched = currentLine.bottom.find(item => item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = (matched || update.shouldRemove) ? currentLine.bottom.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex) {
      return {
        ...item,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentLine.bottom.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = {
    ...currentLine,
    bottom: updatedSection
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
    isBassSelection: false,
    noteType: 'quarter-note'
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

  const handleNoteTypeChange = (updatedNoteType) => {
    setEditorPositon({
      ...editorPosition,
      noteType: updatedNoteType
    });
    handleDataChange({ noteType: updatedNoteType });
  };

  const handleDataChange = (update) => {
    if(update.component === 'Pedal') {
      setData(getUpdatedPedal({ editorPosition, currentLine, data, update }));
    } else if(update.component === 'Dynamics') {
      setData(getUpdatedDynamics({ editorPosition, currentLine, data, update }));
    } else {
      setData(getUpdatedSymbols({ editorPosition, currentLine, data, update }));
    }
  };

  return (
    <Page >
      <div className="create__container">
        <div className="create__displaymusic">
          <DisplaySheetMusic
            isOneLineMode={true}
            sheetMusic={getSheetMusic(configuration, data[editorPosition.lineIndex], editorPosition)}
            {...attributes}
          />
        </div>
        <div className="create__config">
          <ColumnPositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
          <LinePositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
          <Configuration configuration={configuration} onConfigurationChange={handleConfigurationChange} />
        </div>
        <div className="create__form">
          <MusicForm
            selectSymbol={handleDataChange}
            noteType={editorPosition.noteType}
            selectNoteType={handleNoteTypeChange}
            isBassSelection={editorPosition.isBassSelection}
          />
        </div>
      </div>
    </Page>
  );
};

export default Create;
