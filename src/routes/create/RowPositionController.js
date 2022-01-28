import React from 'react';
import Button from 'components/button';

const ZERO = 0;
const ONE = 1;

const RowPositionController = ({ editorPosition, data, onChange }) => {
  const { pageIndex, rowIndex, columnIndex, isBassSelection } = editorPosition;
  const currentLine = data[rowIndex];
  const isFirstRowIndex = rowIndex === ZERO;
  const isLastRowIndex = data.length - ONE === rowIndex;

  return (
    <div className="create__btn-group">
      <Button
        label="Add Row"
        className="create__btn"
        classColor="primary"
        onClick={() => {
          const nextRowIndex = rowIndex + ONE;
          const noteId = String(pageIndex) + String(nextRowIndex) + String(ZERO);
          const newNote = {
            id: noteId,
            pageIndex,
            rowIndex: nextRowIndex,
            columnIndex: ZERO,
            component: 'Note',
            pianoKey: 'C4'
          };
          const nextRow = {
            treble: [newNote],
            center: [],
            bass: [newNote],
            bottom: []
          };
          const updateData = data.concat([nextRow]);

          onChange({
            ...editorPosition,
            rowIndex: rowIndex + ONE,
            columnIndex: ZERO,
            isBassSelection: false
          },updateData);
        }}
      />
      <Button
        label="Prev Row"
        className="create__btn"
        classColor="primary"
        disabled={isFirstRowIndex}
        onClick={() => {
          onChange({
            ...editorPosition,
            rowIndex: rowIndex - ONE,
            columnIndex: ZERO,
            isBassSelection: false
          });
        }}
      />
      <Button
        label="Next Row"
        className="create__btn"
        classColor="primary"
        disabled={isLastRowIndex}
        onClick={() => {
          onChange({
            ...editorPosition,
            rowIndex: rowIndex + ONE,
            columnIndex: ZERO,
            isBassSelection: false
          });
        }}
      />
      <Button
        label="Delete Row"
        className="create__btn"
        classColor="primary"
        disabled={isLastRowIndex && isFirstRowIndex}
        onClick={() => {
          const updatedData = data.filter((item, index) => index !== rowIndex)
            .map((entry,entryIndex) => {
              const updatedEntry = {
                treble: entry.treble.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    rowIndex: entryIndex
                  };
                }),
                center: entry.center.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    rowIndex: entryIndex
                  };
                }),
                bass: entry.bass.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    rowIndex: entryIndex
                  };
                }),
                bottom: entry.bottom.map(item => {
                  const noteId = String(item.pageIndex) + String(entryIndex) + String(item.columnIndex);
                  return {
                    ...item,
                    id: noteId,
                    rowIndex: entryIndex
                  };
                })
              };
              return updatedEntry;
            });
          const updatedEditorRowIndex = isLastRowIndex ? rowIndex - ONE: rowIndex;
          const updatedEditorPosition = {
            ...editorPosition,
            rowIndex: updatedEditorRowIndex,
            columnIndex: ZERO,
            isBassSelection: false
          };

          onChange(updatedEditorPosition, updatedData);
        }}
      />
    </div>
  );
};

export default RowPositionController;
