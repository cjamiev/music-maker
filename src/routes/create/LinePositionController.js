import React from 'react';
import Button from 'components/button';

const ZERO = 0;
const ONE = 1;

const LinePositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, lineIndex, columnIndex, isBassSelection } = editorPosition;
  const currentLine = data[lineIndex];
  const isFirstLineIndex = lineIndex === ZERO;
  const isLastLineIndex = data.length - ONE === lineIndex;

  return (
    <div className="create__btn-group">
      <Button
        label="Add Line"
        className="create__btn"
        classColor="primary"
        onClick={() => {
          const nextLineIndex = lineIndex + ONE;
          const noteId = String(pageIndex) + String(nextLineIndex) + String(ZERO);
          const newNote = {
            id: noteId,
            pageIndex,
            lineIndex: nextLineIndex,
            columnIndex: ZERO,
            component: 'Note',
            pianoKey: 'C4',
            chord: [{},{},{},{}]
          };
          const nextLine = {
            ottavaAlta: [],
            treble: [newNote],
            measure: [],
            dynamics: [],
            bass: [newNote],
            ottavaBassa: [],
            pedal: []
          };
          const updateData = data.concat([nextLine]);

          onChange({
            ...editorPosition,
            lineIndex: lineIndex + ONE,
            columnIndex: ZERO,
            isBassSelection: false
          },updateData);
        }}
      />
      <Button
        label="Prev Line"
        className="create__btn"
        classColor="primary"
        disabled={isFirstLineIndex}
        onClick={() => {
          onChange({
            ...editorPosition,
            lineIndex: lineIndex - ONE,
            columnIndex: ZERO,
            isBassSelection: false
          });
        }}
      />
      <Button
        label="Next Line"
        className="create__btn"
        classColor="primary"
        disabled={isLastLineIndex}
        onClick={() => {
          onChange({
            ...editorPosition,
            lineIndex: lineIndex + ONE,
            columnIndex: ZERO,
            isBassSelection: false
          });
        }}
      />
      <Button
        label="Delete Line"
        className="create__btn"
        classColor="primary"
        disabled={isLastLineIndex && isFirstLineIndex}
        onClick={() => {
          const updatedData = data.filter((item, index) => index !== lineIndex)
            .map((entry,entryIndex) => {
              const updatedEntry = {
                ottavaAlta: entry.ottavaAlta.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                }),
                treble: entry.treble.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                }),
                dynamics: entry.dynamics.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                }),
                bass: entry.bass.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                }),
                pedal: entry.pedal.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                }),
                measure: entry.measure.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                }),
                ottavaBassa: entry.ottavaBassa.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    lineIndex: entryIndex
                  };
                })
              };
              return updatedEntry;
            });
          const updatedEditorLineIndex = isLastLineIndex ? lineIndex - ONE: lineIndex;
          const updatedEditorPosition = {
            ...editorPosition,
            lineIndex: updatedEditorLineIndex,
            columnIndex: ZERO,
            isBassSelection: false
          };

          onChange(updatedEditorPosition, updatedData);
        }}
      />
    </div>
  );
};

export default LinePositionController;
