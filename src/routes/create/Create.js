import React, { useState } from 'react';
import DisplaySheetMusic from 'components/DisplaySheetMusic';
import Piano from 'components/piano';
import CreateSidePanel from './CreateSidePanel';
import Page from 'components/layout';
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
const THREE = 3;

const Create = () => {
  const [pianoKey, setPianoKey] = useState('C4');
  const [index, setIndex] = useState(THREE);
  const [data, setData] = useState({
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

  const handleChange = (update) => {
    setData({
      ...data,
      ...update
    });
  };

  return (
    <Page sidePanelContent={<CreateSidePanel onChange={handleChange}/>}>
      <DisplaySheetMusic sheetMusic={[
        getTitleData({ title: data.title, subtitle: data.subtitle, author: data.author, tempo: data.tempo }),
        getClefData({ rowNumber: ZERO, showBassClef: true }),
        getKeySignatureData({ rowNumber: ZERO, keySignature: data.keySignature, isBassClef: false }),
        getKeySignatureData({ rowNumber: ZERO, keySignature: data.keySignature, isBassClef: true }),
        getTimeSignatureData({ rowNumber: ZERO, timeSignature: data.timeSignature, isBassClef: false }),
        getTimeSignatureData({ rowNumber: ZERO, timeSignature: data.timeSignature, isBassClef: true }),
        getNoteData({
          rowNumber: ZERO,
          columnNumber: 1,
          pianoKey,
          isBassClef: false
        })
      ]} {...attributes}/>
      <Piano selectPianoKey={(id) => { setPianoKey(id); }} />
    </Page>
  );
};

export default Create;
