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
  const [largestColumnIndices, setLargestColumnIndices] = useState([{ rowIndex: ZERO, trebleColumnIndex: ONE, bassColumnIndex: ONE }]);
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
    }],
    bassNotes: [{
      id: '001',
      pageNumber: 0,
      rowNumber: 0,
      columnNumber: 1,
      pianoKey,
      isBassClef: true
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

    const currentNotes = isBassSelection ? data.bassNotes : data.trebleNotes;
    const existingIndex = currentNotes.findIndex(item => item.id === noteId);
    const updatedNotes = existingIndex >= ZERO
      ? currentNotes.map((item, index) => { return index === existingIndex ? noteData : item; })
      : currentNotes.concat([noteData]);

    if(isBassSelection) {
      setData({
        ...data,
        bassNotes: updatedNotes
      });
    } else {
      setData({
        ...data,
        trebleNotes: updatedNotes
      });
    }
  };

  const isLastColumnIndex = isBassSelection
    ? (data.bassNotes.findIndex(item => item.columnNumber === columnIndex + ONE) !== -ONE)
    : (data.trebleNotes.findIndex(item => item.columnNumber === columnIndex + ONE) !== -ONE);

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
        ...data.trebleNotes.map(noteData => getNoteData(noteData)),
        ...data.bassNotes.map(noteData => getNoteData(noteData))
      ]} {...attributes}/>
      <Button
        label="Add Next Note"
        classColor="primary"
        onClick={() => {
          const largestIndex = largestColumnIndices.find(item => item.rowIndex === rowIndex);
          const nextColumnIndex = isBassSelection ? largestIndex.bassColumnIndex + ONE : largestIndex.trebleColumnIndex + ONE;
          const noteId = String(pageIndex) + String(rowIndex) + String(nextColumnIndex);
          setColumnIndex(nextColumnIndex);
          setLargestColumnIndices(largestColumnIndices.map(item => {
            return item.rowIndex === rowIndex ? {
              rowIndex,
              trebleColumnIndex: isBassSelection ? item.trebleColumnIndex : nextColumnIndex,
              bassColumnIndex: isBassSelection ? nextColumnIndex : item.bassColumnIndex
            } : item;
          }));
          const newNote = {
            id: noteId,
            rowNumber: rowIndex,
            columnNumber: nextColumnIndex,
            pianoKey: 'C4',
            isBassClef: isBassSelection
          };
          if(isBassSelection) {
            setData({
              ...data,
              bassNotes: data.bassNotes.concat([newNote])
            });
          } else {
            setData({
              ...data,
              trebleNotes: data.trebleNotes.concat([newNote])
            });
          }
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
        disabled={!isLastColumnIndex}
        onClick={() => {
          setColumnIndex(columnIndex+ONE);
        }}
      />
      <Button
        label="Delete Selected Note"
        classColor="primary"
        disabled={isLastColumnIndex}
        onClick={() => {
          if((rowIndex === ZERO && columnIndex > ONE) || (rowIndex > ZERO && columnIndex > ZERO)) {
            const currentNotes = isBassSelection ? data.bassNotes : data.trebleNotes;
            const updatedNotes = currentNotes.filter((item) => !(item.rowNumber === rowIndex && item.columnNumber === columnIndex));

            if(isBassSelection) {
              setData({
                ...data,
                bassNotes: updatedNotes
              });
            } else {
              setData({
                ...data,
                trebleNotes: updatedNotes
              });
            }
            const nextColumnIndex = columnIndex - ONE;
            setColumnIndex(nextColumnIndex);
            setLargestColumnIndices(largestColumnIndices.map(item => {
              return item.rowIndex === rowIndex ? {
                rowIndex,
                trebleColumnIndex: isBassSelection ? item.trebleColumnIndex : nextColumnIndex,
                bassColumnIndex: isBassSelection ? nextColumnIndex : item.bassColumnIndex
              } : item;
            }));
          }}}
      />
      <Button
        label={isBassSelection ? 'Switch To Treble Clef' : 'Switch To Bass Clef'}
        classColor="primary"
        onClick={() => {
          setIsBassSelection(!isBassSelection);
          setColumnIndex(rowIndex === ZERO ? ONE : ZERO);
        }}
      />
      <Piano selectPianoKey={handlePianoKeyChange} />
    </Page>
  );
};

export default Create;
