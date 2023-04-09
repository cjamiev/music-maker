import React from 'react';
import { Button, IconButton } from 'components/atoms/Button';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

const ZERO = 0;
const ONE = 1;
const ADD_DEFAULT_NOTE = {
  component: 'Note',
  pianoKey: 'C4',
  addedNotes: [{},{},{},{}]
};

export const ColumnPositionController = ({ editorPosition, data, onAddModeChange, onChange }) => {
  const { lineIndex, columnIndex, isBassSelection, isInsertMode } = editorPosition;
  const currentLine = data[lineIndex];
  const lastColumnIndex = isBassSelection ? currentLine.bass.length - ONE : currentLine.treble.length - ONE;

  return (
    <div className='createmusic__col-modifier'>
      <IconButton
        className="createmusic__col-modifier--add"
        type={ICON_TYPES.PLUS}
        size={ICON_SIZES.EXTRA_SMALL}
        handleClick={() => {
          onAddModeChange(ADD_DEFAULT_NOTE);
        }}
      />
      <div className="createmusic__col-modifier--change">
        <IconButton
          className="createmusic__col-modifier--left"
          type={ICON_TYPES.ARROW}
          size={ICON_SIZES.EXTRA_SMALL}
          direction='LEFT'
          isDisabled={columnIndex === ZERO}
          handleClick={() => {
            onChange({
              ...editorPosition,
              columnIndex: columnIndex - ONE
            });
          }}
        />
        <IconButton
          className="createmusic__col-modifier--right"
          type={ICON_TYPES.ARROW}
          size={ICON_SIZES.EXTRA_SMALL}
          direction='RIGHT'
          isDisabled={columnIndex === lastColumnIndex}
          handleClick={() => {
            onChange({
              ...editorPosition,
              columnIndex: columnIndex + ONE
            });
          }}
        />
      </div>
      <div className="createmusic__col-modifier--delete">
        <IconButton
          type={ICON_TYPES.DELETE}
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={columnIndex === ZERO}
          handleClick={() => {
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
      </div>
      <div className="createmusic__col-modifier--modes">
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
        <Button
          label={isInsertMode ? 'Insert Mode' : 'Add Mode'}
          className='createmusic__btn'
          classColor='primary'
          onClick={() => {
            onChange({
              ...editorPosition,
              isInsertMode: !isInsertMode
            });
          }}
        />
      </div>
    </div>
  );
};
