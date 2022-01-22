import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from 'components/piano';
import CreateSidePanel from './CreateSidePanel';
import Page from 'components/layout';
import {
  getTitleData,
  getClefData,
  getKeySignatureData,
  getTimeSignatureData,
  getNoteData
} from './helper';

const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};
const ZERO = 0;
const ONE = 1;
const THREE = 3;

const Create = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [rowIndex, setRowIndex] = useState(ZERO);
  const [columnIndex, setColumnIndex] = useState(ONE);
  const [isBassSelection, setIsBassSelection] = useState(false);
  const [data, setData] = useState({
    configuration: {
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
    },
    notes: []
  });

  const handleChange = (update) => {
    setData({
      ...data,
      ...update
    });
  };

  const handlePianoKeyChange = (id) => {
    const noteData = {
      rowNumber: rowIndex,
      columnNumber: columnIndex,
      pianoKey: id,
      isBassClef: isBassSelection
    };

    const existingIndex = data.notes.findIndex(item => item.rowNumber === rowIndex && item.columnNumber === columnIndex && item.isBassClef === isBassSelection);
    const updatedNotes = existingIndex >= ZERO
      ? data.notes.map((item, index) => { return index === existingIndex ? noteData : item; })
      : data.notes.concat([noteData]);

    setData({
      ...data,
      notes: updatedNotes
    });
  };

  return (
    <Page sidePanelContent={<CreateSidePanel onChange={handleChange}/>}>
      <DisplaySheetMusic sheetMusic={[
        getTitleData({
          title: data.configuration.title,
          subtitle: data.configuration.subtitle,
          author: data.configuration.author,
          tempo: data.configuration.tempo
        }),
        getClefData({ rowNumber: ZERO, showBassClef: true }),
        getKeySignatureData({
          rowNumber: ZERO,
          keySignature: data.configuration.keySignature,
          isBassClef: false
        }),
        getKeySignatureData({
          rowNumber: ZERO,
          keySignature: data.configuration.keySignature,
          isBassClef: true
        }),
        getTimeSignatureData({
          rowNumber: ZERO,
          timeSignature: data.configuration.timeSignature,
          isBassClef: false }),
        getTimeSignatureData({
          rowNumber: ZERO,
          timeSignature: data.configuration.timeSignature,
          isBassClef: true
        }),
        ...data.notes.map(noteData => getNoteData(noteData))
      ]} {...attributes}/>
      <Piano selectPianoKey={handlePianoKeyChange} />
    </Page>
  );
};

export default Create;
