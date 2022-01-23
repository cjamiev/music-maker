import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from 'components/piano';
import CreateSidePanel from './CreateSidePanel';
import Page from 'components/layout';
import Button from 'components/button';
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
  const [pageIndex, setPageIndex] = useState(ZERO);
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
    trebleNotes: [{
      id: '001',
      pageNumber: 0,
      rowNumber: 0,
      columnNumber: 1,
      pianoKey,
      isBassClef: false
    }]
  });

  const handleChange = (update) => {
    setData({
      ...data,
      ...update
    });
  };

  const handlePianoKeyChange = (selectedPianoKey) => {
    const noteId = String(pageIndex) + String(rowIndex) + String(columnIndex);
    const noteData = {
      id: noteId,
      rowNumber: rowIndex,
      columnNumber: columnIndex,
      pianoKey: selectedPianoKey,
      isBassClef: isBassSelection
    };

    const existingIndex = data.trebleNotes.findIndex(item => item.id === noteId);
    const updatedTrebleNotes = existingIndex >= ZERO
      ? data.trebleNotes.map((item, index) => { return index === existingIndex ? noteData : item; })
      : data.trebleNotes.concat([noteData]);

    setData({
      ...data,
      trebleNotes: updatedTrebleNotes
    });
  };

  return (
    <Page sidePanelContent={<CreateSidePanel onChange={handleChange}/>}>
      <DisplaySheetMusic isOneRowMode={true} sheetMusic={[
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
        ...data.trebleNotes.map(noteData => getNoteData(noteData))
      ]} {...attributes}/>
      <Button
        label="Add Next Note"
        classColor="primary"
        onClick={() => {
          const nextColumnIndex = columnIndex + ONE;
          const noteId = String(pageIndex) + String(rowIndex) + String(columnIndex+ONE);
          setColumnIndex(nextColumnIndex);
          setData({
            ...data,
            trebleNotes: data.trebleNotes.concat([{
              id: noteId,
              rowNumber: rowIndex,
              columnNumber: nextColumnIndex,
              pianoKey: 'C4',
              isBassClef: isBassSelection
            }])
          });
        }}
      />
      <Button
        label="Select Previous Note"
        classColor="primary"
        disabled={!(rowIndex === ZERO && columnIndex > ONE) || (rowIndex > ZERO && columnIndex > ZERO)}
        onClick={() => {
          setColumnIndex(columnIndex-ONE);
        }}
      />
      <Button
        label="Select Next Note"
        classColor="primary"
        disabled={(data.trebleNotes.findIndex(item => item.columnNumber === columnIndex + ONE) === -ONE)}
        onClick={() => {
          setColumnIndex(columnIndex+ONE);
        }}
      />
      <Button
        label="Delete Selected Note"
        classColor="primary"
        disabled={(data.trebleNotes.findIndex(item => item.columnNumber === columnIndex + ONE) !== -ONE)}
        onClick={() => {
          if((rowIndex === ZERO && columnIndex > ONE) || (rowIndex > ZERO && columnIndex > ZERO)) {
            const updatedTrebleNotes = data.trebleNotes.filter((item) => !(item.rowNumber === rowIndex && item.columnNumber === columnIndex && item.isBassClef === isBassSelection));

            setData({
              ...data,
              trebleNotes: updatedTrebleNotes
            });
            setColumnIndex(columnIndex-ONE);
          }
        }}
      />
      <Piano selectPianoKey={handlePianoKeyChange} />
    </Page>
  );
};

export default Create;
