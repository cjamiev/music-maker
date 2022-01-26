import React from 'react';
import Button from 'components/button';

const ZERO = 0;
const ONE = 1;
const THREE = 3;
const SELECTED_HIGHLIGHT_CLASSNAME = 'svg--selected-color';

const PositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, rowIndex, columnIndex, isBassSelection } = editorPosition;
  const currentLine = data[editorPosition.rowIndex];

  return (
    <>
      <Button
        label="Add Next Note"
        classColor="primary"
        onClick={() => {
          const nextColumnIndex = isBassSelection ? currentLine.bass.length + ONE : currentLine.treble.length + ONE;
          const noteId = String(pageIndex) + String(rowIndex) + String(nextColumnIndex);
          const newNote = {
            id: noteId,
            pageIndex,
            rowIndex,
            columnIndex: nextColumnIndex,
            component: 'Note',
            pianoKey: 'C4',
            className: SELECTED_HIGHLIGHT_CLASSNAME
          };
          const updatedEditorPosition = {
            ...editorPosition,
            columnIndex: nextColumnIndex
          };
          const updatedSection = isBassSelection
            ? currentLine.bass.concat([newNote])
            : currentLine.treble.concat([newNote]);
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
            if(index === editorPosition.rowIndex) {
              return updatedLine;
            }
            return item;
          });

          onChange(updatedEditorPosition, updatedData);
        }}
      />
    </>
  );
};

export default PositionController;
