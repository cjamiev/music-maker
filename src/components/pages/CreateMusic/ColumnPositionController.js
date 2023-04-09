import React from 'react';
import { Button } from 'components/atoms/Button';

const ZERO = 0;
const ONE = 1;

export const ColumnPositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, lineIndex, columnIndex, noteType, isBassSelection } = editorPosition;
  const currentLine = data[lineIndex];
  const lastColumnIndex = isBassSelection ? currentLine.bass.length - ONE : currentLine.treble.length - ONE;

  return (
    <div className='createmusic__btn-group'>
      <Button
        label='Add'
        className='createmusic__btn'
        classColor='primary'
        onClick={() => {
          const nextColumnIndex = lastColumnIndex + ONE;
          const noteId = `${pageIndex},${lineIndex},${nextColumnIndex}`;
          const newNote = {
            id: noteId,
            pageIndex,
            lineIndex,
            columnIndex: nextColumnIndex,
            bassIndex: isBassSelection ? ONE: ZERO,
            component: 'Note',
            pianoKey: 'C4',
            noteType,
            addedNotes: [{},{},{},{}]
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

          onChange(updatedEditorPosition, updatedData);
        }}
      />
      <Button
        label='Prev'
        className='createmusic__btn'
        classColor='primary'
        disabled={columnIndex === ZERO}
        onClick={() => {
          onChange({
            ...editorPosition,
            columnIndex: columnIndex - ONE
          });
        }}
      />
      <Button
        label='Next'
        className='createmusic__btn'
        classColor='primary'
        disabled={columnIndex === lastColumnIndex}
        onClick={() => {
          onChange({
            ...editorPosition,
            columnIndex: columnIndex + ONE
          });
        }}
      />
      <Button
        label='Delete'
        className='createmusic__btn'
        classColor='primary'
        disabled={lastColumnIndex === ZERO}
        onClick={() => {
          const currentSection = isBassSelection ? currentLine.bass : currentLine.treble;
          const updatedSection = currentSection
            .filter((item) => !(item.columnIndex === columnIndex))
            .map((item,index) => {
              const noteId = `${item.pageIndex},${item.lineIndex},${index}`;
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
            if(index === lineIndex) {
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
        label={isBassSelection ? 'Treble Mode' : 'Bass Mode'}
        className='createmusic__btn'
        classColor='primary'
        onClick={() => {
          onChange({
            ...editorPosition,
            columnIndex: ZERO,
            isBassSelection: !isBassSelection
          });
        }}
      />
    </div>
  );
};
