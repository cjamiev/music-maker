import React from 'react';
import { IconButton } from 'components/atoms/Button';
import { cloneLineToNextLine, reorderLineIndex, swapDataPositions } from './helper';
import { ICON_TYPES, ICON_SIZES } from 'constants/icon';

const ZERO = 0;
const ONE = 1;
const TWO = 2;

export const LinePositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, lineIndex } = editorPosition;
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
          className="createmusic__row-modifier--left"
          type={ICON_TYPES.ARROW}
          direction='LEFT'
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
          className="createmusic__row-modifier--right"
          type={ICON_TYPES.ARROW}
          direction='RIGHT'
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

            const dataWithNewLine = data.slice(ZERO, nextLineIndex).concat([nextLine]).concat(data.slice(nextLineIndex));
            const updatedData = dataWithNewLine
              .map((entry, entryIndex) => {
                if(entryIndex < nextLineIndex) {
                  return entry;
                } else {
                  return reorderLineIndex(entry, entryIndex);
                }
              });

            onChange({
              ...editorPosition,
              lineIndex: lineIndex + ONE,
              columnIndex: ZERO,
              isBassSelection: false
            },updatedData);
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
              ...cloneLineToNextLine(currentLine),
              treble: dupeTreble,
              bass: dupeBass
            };

            const dataWithClonedLine = data.slice(ZERO, nextLineIndex).concat([dupeLine]).concat(data.slice(nextLineIndex));
            const updatedData = dataWithClonedLine
              .map((entry, entryIndex) => {
                if(entryIndex < nextLineIndex) {
                  return entry;
                } else {
                  return reorderLineIndex(entry, entryIndex);
                }
              });

            onChange({
              ...editorPosition,
              lineIndex: nextLineIndex,
              columnIndex: ZERO,
              isBassSelection: false
            }, updatedData);
          }}
        />
      </div>
      <div className="createmusic__row-modifier--move">
        <IconButton
          className="createmusic__row-modifier--up"
          type={ICON_TYPES.ARROW}
          direction='UP'
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={isFirstLineIndex}
          handleClick={() => {
            const prevLine = data[lineIndex - ONE];
            const swappedPrevPageIndex = prevLine.treble[ZERO].pageIndex;
            const swappedPrevLineIndex = prevLine.treble[ZERO].lineIndex;
            const swappedCurPageIndex = currentLine.treble[ZERO].pageIndex;
            const swappedCurLineIndex = currentLine.treble[ZERO].lineIndex;
            const updatedData = data.map((entry,entryIndex) => {
              if(entryIndex === lineIndex - ONE) {
                return swapDataPositions({lineToCopy: currentLine, pageIndex: swappedPrevPageIndex, lineIndex: swappedPrevLineIndex });
              } else if (entryIndex === lineIndex) {
                return swapDataPositions({lineToCopy: prevLine, pageIndex: swappedCurPageIndex, lineIndex: swappedCurLineIndex });
              } else {
                return entry;
              }
            });
            const updatedEditorPosition = {
              ...editorPosition,
              lineIndex: lineIndex - ONE
            };

            onChange(updatedEditorPosition, updatedData);
          }}
        />
        <IconButton
          className="createmusic__row-modifier--down"
          type={ICON_TYPES.ARROW}
          direction='DOWN'
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={isLastLineIndex}
          handleClick={() => {
            const nextLine = data[lineIndex + ONE];
            const swappedNextPageIndex = nextLine.treble[ZERO].pageIndex;
            const swappedNextLineIndex = nextLine.treble[ZERO].lineIndex;
            const swappedCurPageIndex = currentLine.treble[ZERO].pageIndex;
            const swappedCurLineIndex = currentLine.treble[ZERO].lineIndex;
            const updatedData = data.map((entry,entryIndex) => {
              if(entryIndex === lineIndex) {
                return swapDataPositions({lineToCopy: nextLine, pageIndex: swappedCurPageIndex, lineIndex: swappedCurLineIndex });
              } else if (entryIndex === lineIndex + ONE) {
                return swapDataPositions({lineToCopy: currentLine, pageIndex: swappedNextPageIndex, lineIndex: swappedNextLineIndex });
              } else {
                return entry;
              }
            });
            const updatedEditorPosition = {
              ...editorPosition,
              lineIndex: lineIndex + ONE
            };

            onChange(updatedEditorPosition, updatedData);
          }}
        />
      </div>
      <div className="createmusic__row-modifier--delete">
        <IconButton
          type={ICON_TYPES.DELETE}
          size={ICON_SIZES.EXTRA_SMALL}
          isDisabled={isLastLineIndex && isFirstLineIndex}
          handleClick={() => {
            const filteredData = data.filter((item, index) => index !== lineIndex);
            const updatedData = isLastLineIndex ? filteredData : filteredData.map((entry, entryIndex) => {
              if(entryIndex < lineIndex) {
                return entry;
              } else {
                return reorderLineIndex(entry, entryIndex);
              }
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
