const getTrimmedNonNoteEntry = (otherEntry) => {
  const trimmedOtherEntry = {};

  if(otherEntry.ottavaAlta.length) {
    trimmedOtherEntry.ottavaAlta = otherEntry.ottavaAlta;
  }
  if(otherEntry.measure.length) {
    trimmedOtherEntry.measure = otherEntry.measure;
  }
  if(otherEntry.dynamics.length) {
    trimmedOtherEntry.dynamics = otherEntry.dynamics;
  }
  if(otherEntry.ottavaBassa.length) {
    trimmedOtherEntry.ottavaBassa = otherEntry.ottavaBassa;
  }
  if(otherEntry.pedal.length) {
    trimmedOtherEntry.pedal = otherEntry.pedal;
  }

  return trimmedOtherEntry;
};

const getTrimmedNoteData = (noteData) => {
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

export const getCompressedData = (data) => {
  const trimmedData = data
    .map(entry => {
      const trimmedEntry = getTrimmedNonNoteEntry(entry);

      trimmedEntry.treble = entry.treble.map(item => {
        const addedNotes = item.addedNotes.filter(added => added.label);
        return {
          columnIndex: item.columnIndex,
          component: item.component,
          id: item.id,
          lineIndex: item.lineIndex,
          pageIndex: item.pageIndex,
          pianoKey: item.pianoKey,
          ...getTrimmedNoteData(item),
          addedNotes
        };
      });
      trimmedEntry.bass = entry.bass.map(item => {
        const addedNotes = item.addedNotes.filter(added => added.label);
        return {
          columnIndex: item.columnIndex,
          component: item.component,
          id: item.id,
          lineIndex: item.lineIndex,
          pageIndex: item.pageIndex,
          pianoKey: item.pianoKey,
          ...getTrimmedNoteData(item),
          addedNotes
        };
      });

      return trimmedEntry;
    });

  return trimmedData;
};