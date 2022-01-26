import React from 'react';
import Button from 'components/button';

const ZERO = 0;
const ONE = 1;

const ColumnPositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, rowIndex, columnIndex, isBassSelection } = editorPosition;
  const currentLine = data[rowIndex];
  const lastColumnIndex = isBassSelection ? currentLine.bass.length - ONE : currentLine.treble.length - ONE;

  return (
    <>
      <Button
        label="Add Next Note"
        classColor="primary"
        onClick={() => {
          const nextColumnIndex = lastColumnIndex + ONE;
          const noteId = String(pageIndex) + String(rowIndex) + String(nextColumnIndex);
          const newNote = {
            id: noteId,
            pageIndex,
            rowIndex,
            columnIndex: nextColumnIndex,
            component: 'Note',
            pianoKey: 'C4'
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
            if(index === rowIndex) {
              return updatedLine;
            }
            return item;
          });

          onChange(updatedEditorPosition, updatedData);
        }}
      />
      <Button
        label="Select Previous Note"
        classColor="primary"
        disabled={columnIndex === ZERO}
        onClick={() => {
          onChange({
            ...editorPosition,
            columnIndex: columnIndex - ONE
          });
        }}
      />
      <Button
        label="Select Next Note"
        classColor="primary"
        disabled={columnIndex === lastColumnIndex}
        onClick={() => {
          onChange({
            ...editorPosition,
            columnIndex: columnIndex + ONE
          });
        }}
      />
      <Button
        label="Delete Selected Note"
        classColor="primary"
        disabled={lastColumnIndex === ZERO}
        onClick={() => {
          const currentSection = isBassSelection ? currentLine.bass : currentLine.treble;
          const updatedSection = currentSection
            .filter((item) => !(item.columnIndex === columnIndex))
            .map((item,index) => {
              const noteId = String(item.pageIndex) + String(item.rowIndex) + String(index);
              return {
                ...item,
                id: noteId,
                columnIndex: index
              };
            });

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
            if(index === rowIndex) {
              return updatedLine;
            }
            return item;
          });
          const updatedEditorPosition = {
            ...editorPosition,
            columnIndex: columnIndex === lastColumnIndex ? columnIndex - ONE: columnIndex
          };

          onChange(updatedEditorPosition, updatedData);
        }}
      />
      <Button
        label={isBassSelection ? 'Switch To Treble Clef' : 'Switch To Bass Clef'}
        classColor="primary"
        onClick={() => {
          onChange({
            ...editorPosition,
            columnIndex: ZERO,
            isBassSelection: !isBassSelection
          });
        }}
      />
    </>
  );
};

export default ColumnPositionController;
