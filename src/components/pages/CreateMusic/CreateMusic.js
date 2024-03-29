import React, { useState } from 'react';
import { Page }from 'components/core/Page';
import { Button } from 'components/atoms/Button';
import { DisplaySheetMusic } from 'components/molecules/DisplaySheetMusic';
import { MusicForm } from 'components/molecules/MusicForm';
import { getSingleSheeMusicRow } from 'utils/sheetMusicMapper';
import { getCompressedSheetMusicData, getDecompressedSheetMusicData } from 'utils/compressSheetMusicData';
import { downloadFile } from 'utils/download';
import { Configuration } from './Configuration';
import { ColumnPositionController } from './ColumnPositionController';
import { LinePositionController } from './LinePositionController';
import {
  attributes,
  DEFAULT_EDITOR,
  DEFAULT_NOTE,
  DEFAULT_DATA,
  getUpdatedSymbols,
  getUpdatedMeasure,
  getUpdatedDynamics,
  getUpdatedPedal,
  getUpdatedOttava,
  toLowerCaseNoSpace
} from './helper';

const ZERO = 0;
const ONE = 1;
const FOUR = 4;
const LS_SHEET_DATA = 'sheetData';

export const CreateMusic = () => {
  const [editorPosition, setEditorPositon] = useState(DEFAULT_EDITOR);
  const [noteConfig, setNoteConfig] = useState(DEFAULT_NOTE);
  const [configuration, setConfiguration] = useState({
    title: '',
    subtitle: '',
    tempo: '',
    author: '',
    keySignature: '',
    timeSignature: {
      numerator: FOUR,
      denominator: FOUR,
      commonTime: true,
      cutTime: false
    }
  });
  const [data, setData] = useState(DEFAULT_DATA);

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

  const handleAddModeNote = (addNote) => {
    const { pageIndex, lineIndex, isBassSelection } = editorPosition;
    const lastColumnIndex = isBassSelection ? currentLine.bass.length - ONE : currentLine.treble.length - ONE;

    const nextColumnIndex = lastColumnIndex + ONE;
    const noteId = `${pageIndex},${lineIndex},${nextColumnIndex}`;
    const newNote = {
      id: noteId,
      pageIndex,
      lineIndex,
      columnIndex: nextColumnIndex,
      bassIndex: isBassSelection ? ONE: ZERO,
      ...addNote
    };
    const updatedEditorPosition = {
      ...editorPosition,
      columnIndex: nextColumnIndex
    };
    const updatedSection = isBassSelection
      ? currentLine.bass.concat([newNote])
      : currentLine.treble.concat([newNote]);
    const updatedLine = isBassSelection
      ? {
        ...currentLine,
        bass: updatedSection
      }
      : {
        ...currentLine,
        treble: updatedSection
      };

    const updatedData = data.map((item, index) => {
      if(index === lineIndex) {
        return updatedLine;
      }
      return item;
    });

    setEditorPositon(updatedEditorPosition);
    updatedData && setData(updatedData);
  };

  const handleNoteTypeChange = (updatedNote) => {
    setNoteConfig({ ...noteConfig, ...updatedNote });
    handleDataChange(updatedNote);
  };

  const handleAddHiglight = () => {
    const updatedClassName = noteConfig.className ? '':'svg--selected-color';
    const updatedNoteConfig = {...noteConfig, className: updatedClassName};
    setNoteConfig(updatedNoteConfig);
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

    setEditorPositon(DEFAULT_EDITOR);
    setNoteConfig(DEFAULT_NOTE);

    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onloadend = () => {
      const decompressedData = getDecompressedSheetMusicData(fileReader.result);
      const contents = JSON.parse(decompressedData);
      const cachedFirstNote= contents.data[ZERO].treble[ZERO];

      setConfiguration(contents.configuration);
      setData(contents.data);
      setEditorPositon(DEFAULT_EDITOR);
      setNoteConfig({
        pianoKey: cachedFirstNote.pianoKey,
        addedNotes: cachedFirstNote.addedNotes,
        showWholeNote: cachedFirstNote.showWholeNote,
        showHalfNote: cachedFirstNote.showHalfNote,
        showQuarterNote: cachedFirstNote.showQuarterNote,
        showEighthNote: cachedFirstNote.showEighthNote,
        showSixteenthNote: cachedFirstNote.showSixteenthNote,
        showNoteFlat: cachedFirstNote.showNoteFlat,
        showNoteSharp: cachedFirstNote.showNoteSharp,
        showNoteNatural: cachedFirstNote.showNoteNatural,
        showStaccato: cachedFirstNote.showStaccato,
        showDotted: cachedFirstNote.showDotted,
        showAccent: cachedFirstNote.showAccent,
        showTenuto: cachedFirstNote.showTenuto,
        showFermata: cachedFirstNote.showFermata,
        showTrill: cachedFirstNote.showTrill
      });
    };
  };

  const handleOnDownload = () => {
    const compressedData = getCompressedSheetMusicData(configuration, data);
    const fileName = `${toLowerCaseNoSpace(configuration.title)}-${toLowerCaseNoSpace(configuration.subtitle)}.json`;
    downloadFile(fileName, compressedData);
  };

  const handleOnGetCache = (e) => {
    const item = localStorage.getItem(LS_SHEET_DATA);
    const decompressedData = getDecompressedSheetMusicData(item);
    const contents = JSON.parse(decompressedData);
    const cachedFirstNote= contents.data[ZERO].treble[ZERO];

    setConfiguration(contents.configuration);
    setData(contents.data);
    setEditorPositon(DEFAULT_EDITOR);
    setNoteConfig({
      pianoKey: cachedFirstNote.pianoKey,
      addedNotes: cachedFirstNote.addedNotes,
      showWholeNote: cachedFirstNote.showWholeNote,
      showHalfNote: cachedFirstNote.showHalfNote,
      showQuarterNote: cachedFirstNote.showQuarterNote,
      showEighthNote: cachedFirstNote.showEighthNote,
      showSixteenthNote: cachedFirstNote.showSixteenthNote,
      showNoteFlat: cachedFirstNote.showNoteFlat,
      showNoteSharp: cachedFirstNote.showNoteSharp,
      showNoteNatural: cachedFirstNote.showNoteNatural,
      showStaccato: cachedFirstNote.showStaccato,
      showDotted: cachedFirstNote.showDotted,
      showAccent: cachedFirstNote.showAccent,
      showTenuto: cachedFirstNote.showTenuto,
      showFermata: cachedFirstNote.showFermata,
      showTrill: cachedFirstNote.showTrill
    });
  };


  const handleOnStoreCache = () => {
    const compressedData = getCompressedSheetMusicData(configuration, data);
    localStorage.setItem(LS_SHEET_DATA, compressedData);
  };

  const handleClick = (svgItem) => {
    const isBassSelection = Boolean(svgItem.bassIndex);
    const hasClickedOnBass = isBassSelection !== editorPosition.isBassSelection;

    setEditorPositon({
      pageIndex: svgItem.pageIndex,
      lineIndex: svgItem.lineIndex,
      columnIndex: svgItem.columnIndex,
      isBassSelection,
      isInsertMode: hasClickedOnBass ? editorPosition.isInsertMode : true
    });
  };

  return (
    <Page >
      <div className='createmusic__container'>
        <div className='createmusic__displaymusic'>
          <DisplaySheetMusic
            isOneLineMode={true}
            sheetMusic={getSingleSheeMusicRow(configuration, data[editorPosition.lineIndex], editorPosition)}
            handleClick={handleClick}
            {...attributes}
          />
        </div>
        <div className='createmusic__config'>
          <ColumnPositionController
            editorPosition={editorPosition}
            data={data}
            onAddModeChange={handleAddModeNote}
            onChange={handlePositionChange}
          />
          <LinePositionController
            editorPosition={editorPosition}
            data={data}
            onChange={handlePositionChange}
          />
          <Configuration
            configuration={configuration}
            onConfigurationChange={handleConfigurationChange}
          />
          <div className="createmusic__cache-section">
            <Button
              key="cache"
              className='createmusic__save-btn'
              onClick={handleOnStoreCache}
              label="Cache"
            />
            <Button
              key="load-cache"
              className='createmusic__save-btn'
              onClick={handleOnGetCache}
              label="Load Cache"
            />
          </div>
          <div className="createmusic__file-section">
            <Button
              key="save"
              className='createmusic__save-btn'
              onClick={handleOnDownload}
              label="Download"
            />
            <input className="createmusic__file-upload" type="file" onChange={handleFileUploaded} />
          </div>
        </div>
        <div className='createmusic__form'>
          <MusicForm
            noteConfig={noteConfig}
            isInsertMode={editorPosition.isInsertMode}
            onAddModeChange={handleAddModeNote}
            selectSymbol={handleDataChange}
            selectNoteType={handleNoteTypeChange}
            handleAddHiglight={handleAddHiglight}
            isBassSelection={editorPosition.isBassSelection}
          />
        </div>
      </div>
    </Page>
  );
};
