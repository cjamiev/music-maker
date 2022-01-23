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

// eslint-disable-next-line complexity
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

  const isLastColumnIndex = isBassSelection
    ? (data.bassNotes.findIndex(item => item.columnNumber === columnIndex + ONE) !== -ONE)
    : (data.trebleNotes.findIndex(item => item.columnNumber === columnIndex + ONE) !== -ONE);
  const isLastRowIndex = (data.bassNotes.findIndex(item => item.rowNumber === rowIndex + ONE) !== -ONE);
  const currentTrebleNotes = data.trebleNotes.filter(item => item.rowNumber === rowIndex);
  const currentBassNotes = data.bassNotes.filter(item => item.rowNumber === rowIndex);

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
      pageNumber: pageIndex,
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
        rowIndex === ZERO && getTimeSignatureData({
          rowNumber: ZERO,
          timeSignature: data.configuration.timeSignature,
          isBassClef: false }),
        rowIndex === ZERO && getTimeSignatureData({
          rowNumber: ZERO,
          timeSignature: data.configuration.timeSignature,
          isBassClef: true
        }),
        ...currentTrebleNotes
          .filter(item => item.rowNumber === rowIndex)
          .map(noteData => getNoteData({...noteData, rowNumber: ZERO })),
        ...currentBassNotes
          .filter(item => item.rowNumber === rowIndex)
          .map(noteData => getNoteData({...noteData, rowNumber: ZERO }))
      ].filter(Boolean)} {...attributes}/>
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
            pageNumber: pageIndex,
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
        disabled={(isBassSelection && currentBassNotes.length === ONE) || (!isBassSelection && currentTrebleNotes.length === ONE)}
        onClick={() => {
          const currentNotes = isBassSelection ? currentBassNotes : currentTrebleNotes;
          const updatedNotes = currentNotes
            .filter((item) => !(item.rowNumber === rowIndex && item.columnNumber === columnIndex))
            .map((item,index) => {
              if(rowIndex === ZERO) {
                const noteId = String(item.pageNumber) + String(item.rowNumber) + String(index + ONE);
                return {
                  ...item,
                  id: noteId,
                  columnNumber: index + ONE
                };
              }
              else {
                const noteId = String(item.pageNumber) + String(item.rowNumber) + String(index);
                return {
                  ...item,
                  id: noteId,
                  columnNumber: index
                };
              }
            });

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
          const nextColumnIndex = (rowIndex === ZERO && columnIndex === ONE)
            || (rowIndex > ZERO && columnIndex === ZERO)
            ? columnIndex : columnIndex - ONE;
          setLargestColumnIndices(largestColumnIndices.map(item => {
            return item.rowIndex === rowIndex ? {
              rowIndex,
              trebleColumnIndex: isBassSelection ? item.trebleColumnIndex : nextColumnIndex,
              bassColumnIndex: isBassSelection ? nextColumnIndex : item.bassColumnIndex
            } : item;
          }));
        }}
      />
      <Button
        label={isBassSelection ? 'Switch To Treble Clef' : 'Switch To Bass Clef'}
        classColor="primary"
        onClick={() => {
          setIsBassSelection(!isBassSelection);
          setColumnIndex(rowIndex === ZERO ? ONE : ZERO);
        }}
      />
      <Button
        label="Add Next Row"
        classColor="primary"
        onClick={() => {
          const nextRowIndex = rowIndex + ONE;
          setRowIndex(nextRowIndex);
          setColumnIndex(ZERO);
          setLargestColumnIndices(largestColumnIndices.concat([{ rowIndex: ZERO, trebleColumnIndex: ONE, bassColumnIndex: ONE }]));
          setIsBassSelection(false);

          const noteId = String(pageIndex) + String(nextRowIndex) + String(ZERO);
          const newTrebleNote = {
            id: noteId,
            pageNumber: pageIndex,
            rowNumber: nextRowIndex,
            columnNumber: ZERO,
            pianoKey: 'C4',
            isBassClef: false
          };
          const newBassNote = {
            id: noteId,
            pageNumber: pageIndex,
            rowNumber: nextRowIndex,
            columnNumber: ZERO,
            pianoKey: 'C4',
            isBassClef: true
          };
          setData({
            ...data,
            trebleNotes: data.trebleNotes.concat([newTrebleNote]),
            bassNotes: data.bassNotes.concat([newBassNote])
          });
        }}
      />
      <Button
        label="Select Previous Row"
        classColor="primary"
        disabled={rowIndex === ZERO}
        onClick={() => {
          setRowIndex(rowIndex-ONE);
        }}
      />
      <Button
        label="Select Next Row"
        classColor="primary"
        disabled={!isLastRowIndex}
        onClick={() => {
          setRowIndex(rowIndex+ONE);
        }}
      />
      <Piano selectPianoKey={handlePianoKeyChange} />
    </Page>
  );
};

export default Create;
