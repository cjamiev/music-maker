import { replaceLine } from './replaceLine';

const compressMap = {
  'Dynamics': 'Dnmc',
  'Measure': 'Msr',
  'Note': 'Nt',
  'Pedal': 'Pd',
  'Rest': 'Rst',
  'bassIndex' : 'bI',
  'pageIndex' : 'pI',
  'lineIndex' : 'lI',
  'columnIndex' : 'cI',
  'pianoKey' : 'pK',
  'component' : 'cP',
  'conditions' : 'cond',
  'addedNotes' : 'aN',
  'showWholeNote' : 'sWN',
  'showHalfNote' : 'sHN',
  'showQuarterNote' : 'sQN',
  'showEighthNote' : 'sEN',
  'showSixteenthNote' : 'sSN',
  'showNoteFlat' : 'sNF',
  'showNoteSharp' : 'sNS',
  'showNoteNatural' : 'sNN',
  'showStaccato' : 'sStac',
  'showDotted' : 'sDot',
  'showAccent' : 'sAcc',
  'showTenuto' : 'sTenu',
  'showFermata' : 'sFerm',
  'showTrill' : 'sTril',
  'showBlank' : 'sBlank',
  'showWholeRest' : 'sWR',
  'showHalfRest' : 'sHR',
  'showQuarterRest' : 'sQR',
  'showEighthRest' : 'sER',
  'showSixteenthRest' : 'sSR',
  'showMeasureEnd': 'sME',
  'showRepeatBarStart': 'sRBS',
  'showRepeatBarEnd': 'sRBE',
  'showPedalStart': 'sPS',
  'showPedalContinue': 'sPC',
  'showPedalQuickRelease': 'sPQR',
  'showPedalEnd': 'sPE',
  'showCrescendo': 'sCres',
  'showDecrescendo': 'sDecr',
  'showOttavaAltaStart': 'sOAS',
  'showOttavaAltaContinue': 'sOAC',
  'showOttavaAltaEnd': 'sOAE',
  'showOttavaBassaStart': 'sOBS',
  'showOttavaBassaContinue': 'sOBC',
  'showOttavaBassaEnd': 'sOBE'
};

const decompressMap = Object.keys(compressMap).map(key => {
  return { [compressMap[key]] : key };
}).reduce((current, accumulation) => ({...current, ...accumulation}));

const getCompressedNonNoteData = (rowEntryData) => {
  const compressedNonNoteRowEntryData = {};

  if(rowEntryData.ottavaAlta?.length) {
    compressedNonNoteRowEntryData.ottavaAlta = rowEntryData.ottavaAlta;
  }
  if(rowEntryData.measure?.length) {
    compressedNonNoteRowEntryData.measure = rowEntryData.measure;
  }
  if(rowEntryData.dynamics?.length) {
    compressedNonNoteRowEntryData.dynamics = rowEntryData.dynamics;
  }
  if(rowEntryData.ottavaBassa?.length) {
    compressedNonNoteRowEntryData.ottavaBassa = rowEntryData.ottavaBassa;
  }
  if(rowEntryData.pedal?.length) {
    compressedNonNoteRowEntryData.pedal = rowEntryData.pedal;
  }

  return compressedNonNoteRowEntryData;
};

const getCompressedNoteData = (noteData) => {
  return Object.keys(noteData)
    .map(key => {
      if(noteData[key]) {
        return {[key]: noteData[key] };
      }
      else {
        return undefined;
      }
    })
    .filter(Boolean)
    .reduce((current, accumulation) => ({...current, ...accumulation }));
};

const getCompressedNoteRow = (noteRow) => {
  return noteRow.map(noteData => {
    const addedNotes = noteData.addedNotes ? noteData.addedNotes.filter(added => added.label): [];

    return {
      columnIndex: noteData.columnIndex,
      component: noteData.component,
      id: noteData.id,
      lineIndex: noteData.lineIndex,
      pageIndex: noteData.pageIndex,
      pianoKey: noteData.pianoKey,
      ...getCompressedNoteData(noteData),
      addedNotes
    };
  });
};

export const getCompressedSheetMusicData = (configuration, sheetMusicData) => {
  const strippedData = sheetMusicData
    .map(rowEntry => {
      return {
        ...getCompressedNonNoteData(rowEntry),
        treble : getCompressedNoteRow(rowEntry.treble),
        bass: getCompressedNoteRow(rowEntry.bass)
      };
    });

  const compressedData = replaceLine(JSON.stringify({configuration, data: strippedData}), compressMap);

  return compressedData;
};

export const getDecompressedSheetMusicData = (compressedData) => {
  const decompressedData = replaceLine(compressedData, decompressMap);

  return decompressedData;
};