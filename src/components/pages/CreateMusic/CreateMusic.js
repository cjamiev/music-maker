import React, { useState } from 'react';
import { Page }from 'components/core/Page';
import { Button } from 'components/atoms/Button';
import { DisplaySheetMusic } from 'components/molecules/DisplaySheetMusic';
import { MusicForm } from 'components/molecules/MusicForm';
import { getSheetMusic } from 'utils/sheetMusicMapper';
import { getCompressedSheetMusicData } from 'utils/compressSheetMusicData';
import { downloadFile } from 'utils/download';
import { Configuration } from './Configuration';
import { ColumnPositionController } from './ColumnPositionController';
import { LinePositionController } from './LinePositionController';
import {
  attributes,
  DEFAULT_NOTE,
  STARTING_NOTE,
  getUpdatedSymbols,
  getUpdatedMeasure,
  getUpdatedDynamics,
  getUpdatedPedal,
  getUpdatedOttava,
  toLowerCaseNoSpace
} from './helper';

const ZERO = 0;

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

    if(!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onloadend = () => {
      const contents = JSON.parse(fileReader.result);

      setConfiguration(contents.configuration);
      setData(contents.data);
    };
  };

  const handleOnSaveSheetMusic = () => {
    const compressedData = getCompressedSheetMusicData(data);
    const contentToSave = JSON.stringify({
      configuration,
      data: compressedData
    });
    const fileName = `${toLowerCaseNoSpace(configuration.title)}-${toLowerCaseNoSpace(configuration.subtitle)}.json`;
    downloadFile(fileName, contentToSave);
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
            onClick={handleOnSaveSheetMusic}
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
