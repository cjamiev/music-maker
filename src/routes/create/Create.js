import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from 'components/piano';
import CreateSidePanel from './CreateSidePanel';
import PositionController from './PositionController';
import Page from 'components/layout';
import Button from 'components/button';
import {
  getSheetMusic
} from './helper';

const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};
const ZERO = 0;
const ONE = 1;

const Create = () => {
  const [editorPosition, setEditorPositon] = useState({
    pageIndex: ZERO,
    rowIndex: ZERO,
    columnIndex: ONE,
    isBassSelection: false
  });
  const [configuration, setConfiguration] = useState({
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
  });
  const [data, setData] = useState([{
    treble: [{
      id: '001',
      pageIndex: ZERO,
      rowIndex: ZERO,
      columnIndex: ONE,
      component: 'Note',
      pianoKey: 'C4'
    }],
    center: [],
    bass: [{
      id: '001',
      pageIndex: ZERO,
      rowIndex: ZERO,
      columnIndex: ONE,
      component: 'Note',
      pianoKey: 'C4'
    }],
    pedal: []
  }]);

  const currentLine = data[editorPosition.rowIndex];

  const handlePositionChange = (updatedEditorPosition, updatedData) => {
    setEditorPositon(updatedEditorPosition);
    updatedData && setData(updatedData);
  };

  const handlePianoKeyChange = (selectedPianoKey) => {
    const currentSection = editorPosition.isBassSelection ? currentLine.bass : currentLine.treble;
    const updatedSection = currentSection.map(item => {
      if(item.pageIndex === editorPosition.pageIndex
      && item.rowIndex === editorPosition.rowIndex
      && item.columnIndex === editorPosition.columnIndex) {
        return {
          ...item,
          pianoKey: selectedPianoKey
        };
      }
      return item;
    });
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

    setData(updatedData);
  };

  return (
    <Page>
      <DisplaySheetMusic isOneRowMode={true} sheetMusic={getSheetMusic(data[editorPosition.rowIndex])} {...attributes} />
      <PositionController editorPosition={editorPosition} data={data} onChange={handlePositionChange} />
      <Piano selectPianoKey={handlePianoKeyChange} />
    </Page>
  );
};

export default Create;
