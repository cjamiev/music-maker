import React from 'react';
import { IconButton } from 'components/atoms/Button';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

const ZERO = 0;
const ONE = 1;
const TWO = 2;

export const LinePositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, lineIndex, columnIndex, isBassSelection } = editorPosition;
  const currentLine = data[lineIndex];
  const isFirstLineIndex = lineIndex === ZERO;
  const isLastLineIndex = data.length - ONE === lineIndex;

  return (
    <div className='createmusic__row-modifier'>
      <div className='createmusic__row-modifier--number'>
          Row: {lineIndex + ONE}
      </div>
      <div className="createmusic__row-modifier--change">
        <IconButton
          className="createmusic__row-modifier--up"
          type={ICON_TYPES.ARROW}
          direction='UP'
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={isFirstLineIndex}
          handleClick={() => {
            onChange({
              ...editorPosition,
              lineIndex: lineIndex - ONE,
              columnIndex: ZERO,
              isBassSelection: false
            });
          }}
        />
        <IconButton
          className="createmusic__row-modifier--down"
          type={ICON_TYPES.ARROW}
          direction='DOWN'
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={isLastLineIndex}
          handleClick={() => {
            onChange({
              ...editorPosition,
              lineIndex: lineIndex + ONE,
              columnIndex: ZERO,
              isBassSelection: false
            });
          }}
        />
      </div>
      <div className="createmusic__row-modifier--new">
        <IconButton
          className="createmusic__row-modifier--new-empty"
          type={ICON_TYPES.PLUS}
          size={ICON_SIZES.EXTRA_SMALL}
          handleClick={() => {
            const nextLineIndex = lineIndex + ONE;
            const noteId = `${pageIndex},${nextLineIndex},${ZERO}`;
            const newNote = {
              id: noteId,
              pageIndex,
              lineIndex: nextLineIndex,
              columnIndex: ZERO,
              component: 'Note',
              pianoKey: 'C4',
              addedNotes: [{},{},{},{}]
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
        <IconButton
          className="createmusic__row-modifier--new-copy"
          type={ICON_TYPES.COPY}
          size={ICON_SIZES.EXTRA_SMALL}
          handleClick={() => {
            const nextLineIndex = lineIndex + ONE;
            const dupeTreble = currentLine.treble.map((row) => {
              const previousNoteId = row.id.split(',');
              const noteId = `${previousNoteId[ZERO]},${nextLineIndex},${previousNoteId[TWO]}`;
              return {
                ...row,
                id: noteId,
                lineIndex: nextLineIndex
              };
            });
            const dupeBass = currentLine.bass.map((row) => {
              const previousNoteId = row.id.split(',');
              const noteId = `${previousNoteId[ZERO]},${nextLineIndex},${previousNoteId[TWO]}`;
              return {
                ...row,
                id: noteId,
                lineIndex: nextLineIndex
              };
            });
            const dupeLine = {
              ...currentLine,
              treble: dupeTreble,
              bass: dupeBass
            };
            const updateData = data.concat([dupeLine]);

            onChange({
              ...editorPosition,
              lineIndex: lineIndex + ONE,
              columnIndex: ZERO,
              isBassSelection: false
            },updateData);
          }}
        />
      </div>
      <div className="createmusic__row-modifier--delete">
        <IconButton
          type={ICON_TYPES.DELETE}
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={isLastLineIndex && isFirstLineIndex}
          handleClick={() => {
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
    </div>
  );
};
