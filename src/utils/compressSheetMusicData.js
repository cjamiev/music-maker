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

export const getCompressedSheetMusicData = (sheetMusicData) => {
  return sheetMusicData
    .map(rowEntry => {
      return {
        ...getCompressedNonNoteData(rowEntry),
        treble : getCompressedNoteRow(rowEntry.treble),
        bass: getCompressedNoteRow(rowEntry.bass)
      };
    });
};