import React, { useState } from 'react';
import { Page }from 'components/core/Page';
import { Button } from 'components/atoms/Button';
import { DisplaySheetMusic } from 'components/molecules/DisplaySheetMusic';
import { MusicForm } from 'components/molecules/MusicForm';
import { Configuration } from './Configuration';
import { ColumnPositionController } from './ColumnPositionController';
import { LinePositionController } from './LinePositionController';
import { getSheetMusic } from './utils/sheetMusicMapper';
import { getCompressedData } from './utils/compressData';
import { downloadFile } from './utils/download';

const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};
const ZERO = 0;
const DEFAULT_NOTE = {
  showWholeNote: false,
  showHalfNote: false,
  showQuarterNote: true,
  showEighthNote: false,
  showSixteenthNote: false,
  showNoteFlat: false,
  showNoteSharp: false,
  showNoteNatural: false,
  showStaccato: false,
  showDotted: false,
  showAccent: false,
  showTenuto: false,
  showFermata: false,
  showTrill: false,
  pianoKey: 'C4',
  addedNotes: [{},{},{},{}]
};
const STARTING_NOTE = {
  id: '001',
  pageIndex: ZERO,
  lineIndex: ZERO,
  columnIndex: ZERO,
  component: 'Note',
  pianoKey: 'C4',
  addedNotes: [{},{},{},{}]
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

const getUpdatedOttava = ({ editorPosition, currentLine, data, update }) => {
  const currentSection = update.isAlta ? currentLine.ottavaAlta : currentLine.ottavaBassa;
  const matched = currentSection.find(item => item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = matched ? currentSection.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
      && item.lineIndex === editorPosition.lineIndex
      && item.columnIndex === editorPosition.columnIndex) {
      return {
        pageIndex: editorPosition.pageIndex,
        lineIndex: editorPosition.lineIndex,
        columnIndex: editorPosition.columnIndex,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentSection.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = update.isAlta
    ? {
      ...currentLine,
      ottavaAlta: updatedSection
    }
    : {
      ...currentLine,
      ottavaBassa: updatedSection
    };

  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

export const CreateMusic = () => {
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
    ottavaAlta: [],
    treble: [STARTING_NOTE],
    measure: [],
    dynamics: [],
    bass: [STARTING_NOTE],
    ottavaBassa: [],
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
    setNoteConfig({ ...noteConfig, addedNotes: [{},{},{},{}] });
    updatedData && setData(updatedData);
  };

  const handleNoteTypeChange = (updatedNote) => {
    setNoteConfig({ ...noteConfig, ...updatedNote });
    handleDataChange(updatedNote);
  };

  const handleDataChange = (updatedSymbol) => {
    if(updatedSymbol.component === 'Pedal') {
      setData(getUpdatedPedal({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else if(updatedSymbol.component === 'Ottava') {
      setData(getUpdatedOttava({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else if(updatedSymbol.component === 'Measure') {
      setData(getUpdatedMeasure({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else if(updatedSymbol.component === 'Dynamics') {
      setData(getUpdatedDynamics({ editorPosition, currentLine, data, update: updatedSymbol }));
    } else {
      setData(getUpdatedSymbols({ editorPosition, currentLine, data, update: {...noteConfig, ...updatedSymbol } }));
    }
  };

  const handleFileUploaded = (e) => {
    const file = e.target.files[ZERO];
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[ZERO]);
    fileReader.onloadend = () => {
      const contents = JSON.parse(fileReader.result);

      console.log(contents);

      setConfiguration(contents.configuration);
      setData(contents.data);
    };
  };

  return (
    <Page >
      <div className='createmusic__container'>
        <div className='createmusic__displaymusic'>
          <DisplaySheetMusic
            isOneLineMode={true}
            sheetMusic={getSheetMusic(configuration, data[editorPosition.lineIndex], editorPosition)}
            {...attributes}
          />
        </div>
        <div className='createmusic__config'>
          <ColumnPositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
          <LinePositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
          <Configuration configuration={configuration} onConfigurationChange={handleConfigurationChange} />
          <Button
            key="save"
            onClick={() => {
              const compressedData = getCompressedData(data);
              const fileToSave = JSON.stringify({
                configuration,
                data: compressedData
              });
              downloadFile('test.json', fileToSave);
            }}
            label="Save"
          />
          <input type="file" id="filetoupload" name="upload" onChange={handleFileUploaded} />
        </div>
        <div className='createmusic__form'>
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
