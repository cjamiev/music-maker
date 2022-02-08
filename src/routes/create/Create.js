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
const DEFAULT_NOTE = {
  showWholeNote: false,
  showHalfNote: false,
  showQuarterNote: true,
  showEighthNote: false,
  showSixteenthNote: false,
  showNoteFlat: false,
  showNoteSharp: false,
  showNoteNatural: false,
  showAccent: false,
  showTenuto: false,
  showFermata: false
};
const STARTING_NOTE = {
  id: '001',
  pageIndex: ZERO,
  lineIndex: ZERO,
  columnIndex: ZERO,
  component: 'Note',
  pianoKey: 'C4'
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

const getUpdatedMeasure = ({ editorPosition, currentLine, data, update }) => {
  const matched = currentLine.measure.find(item => item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = matched ? currentLine.measure.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex) {
      return {
        pageIndex: item.pageIndex,
        lineIndex: item.lineIndex,
        columnIndex: item.columnIndex,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentLine.measure.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });
  const updatedLine = {
    ...currentLine,
    measure: updatedSection
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
  const matched = currentLine.dynamics.find(item => item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = (matched || update.shouldRemove) ? currentLine.dynamics.map(item => {
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
    : currentLine.dynamics.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = {
    ...currentLine,
    dynamics: updatedSection
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
  const matched = currentLine.pedal.find(item => item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = (matched || update.shouldRemove) ? currentLine.pedal.map(item => {
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
    : currentLine.pedal.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = {
    ...currentLine,
    pedal: updatedSection
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
  const [noteConfig, setNoteConfig] = useState(DEFAULT_NOTE);
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
    measure: [],
    dynamics: [],
    bass: [STARTING_NOTE],
    pedal: []
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

  const handleNoteTypeChange = (updatedNote) => {
    setNoteConfig({ ...noteConfig, ...updatedNote });
    handleDataChange(updatedNote);
  };

  const handleDataChange = (updatedSymbol) => {
    if(updatedSymbol.component === 'Pedal') {
      setData(getUpdatedPedal({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else if(updatedSymbol.component === 'Measure') {
      setData(getUpdatedMeasure({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else if(updatedSymbol.component === 'Dynamics') {
      setData(getUpdatedDynamics({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else {
      setData(getUpdatedSymbols({ editorPosition, currentLine, data, update: {...noteConfig, ...updatedSymbol } }));
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
            noteConfig={noteConfig}
            selectSymbol={handleDataChange}
            selectNoteType={handleNoteTypeChange}
            isBassSelection={editorPosition.isBassSelection}
          />
        </div>
      </div>
    </Page>
  );
};

export default Create;
