const ZERO = 0;

export const attributes = {
  width: 1000,
  height: 600,
  viewBox: '0 0 529.2 317.5'
};

export const DEFAULT_EDITOR = {
  pageIndex: ZERO,
  lineIndex: ZERO,
  columnIndex: ZERO,
  isBassSelection: false
};

export const DEFAULT_NOTE = {
  showWholeNote: false,
  showHalfNote: false,
  showQuarterNote: true,
  showEighthNote: false,
  showSixteenthNote: false,
  showNoteFlat: false,
  showNoteSharp: false,
  showNoteNatural: false,
  showStaccato: false,
  showDotted: false,
  showAccent: false,
  showTenuto: false,
  showFermata: false,
  showTrill: false,
  pianoKey: 'C4',
  addedNotes: [{},{},{},{}]
};
const STARTING_NOTE = {
  id: '0,0,0',
  pageIndex: ZERO,
  lineIndex: ZERO,
  columnIndex: ZERO,
  component: 'Note',
  pianoKey: 'C4',
  addedNotes: [{},{},{},{}]
};

export const DEFAULT_DATA = [{
  ottavaAlta: [],
  treble: [STARTING_NOTE],
  measure: [],
  dynamics: [],
  bass: [STARTING_NOTE],
  ottavaBassa: [],
  pedal: []
}];

export const getUpdatedSymbols = ({ editorPosition, currentLine, data, update }) => {
  const currentSection = editorPosition.isBassSelection ? currentLine.bass : currentLine.treble;
  const updatedSection = currentSection.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex) {
      return {
        ...item,
        ...update
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
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

export const getUpdatedMeasure = ({ editorPosition, currentLine, data, update }) => {
  const matched = currentLine.measure.find(item => item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = matched ? currentLine.measure.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex) {
      return {
        pageIndex: item.pageIndex,
        lineIndex: item.lineIndex,
        columnIndex: item.columnIndex,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentLine.measure.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });
  const updatedLine = {
    ...currentLine,
    measure: updatedSection
  };

  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

export const getUpdatedDynamics = ({ editorPosition, currentLine, data, update }) => {
  const matched = currentLine.dynamics.find(item => item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = (matched || update.shouldRemove) ? currentLine.dynamics.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex) {
      return {
        ...item,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentLine.dynamics.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = {
    ...currentLine,
    dynamics: updatedSection
  };

  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

export const getUpdatedPedal = ({ editorPosition, currentLine, data, update }) => {
  const matched = currentLine.pedal.find(item => item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = (matched || update.shouldRemove) ? currentLine.pedal.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex) {
      return {
        ...item,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentLine.pedal.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = {
    ...currentLine,
    pedal: updatedSection
  };

  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

export const getUpdatedOttava = ({ editorPosition, currentLine, data, update }) => {
  const currentSection = update.isAlta ? currentLine.ottavaAlta : currentLine.ottavaBassa;
  const matched = currentSection.find(item => item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex);
  const updatedSection = matched ? currentSection.map(item => {
    if(item.pageIndex === editorPosition.pageIndex
        && item.lineIndex === editorPosition.lineIndex
        && item.columnIndex === editorPosition.columnIndex) {
      return {
        pageIndex: editorPosition.pageIndex,
        lineIndex: editorPosition.lineIndex,
        columnIndex: editorPosition.columnIndex,
        ...update
      };
    }
    return item;
  }).filter(item => !item.shouldRemove)
    : currentSection.concat({
      pageIndex: editorPosition.pageIndex,
      lineIndex: editorPosition.lineIndex,
      columnIndex: editorPosition.columnIndex,
      ...update
    });

  const updatedLine = update.isAlta
    ? {
      ...currentLine,
      ottavaAlta: updatedSection
    }
    : {
      ...currentLine,
      ottavaBassa: updatedSection
    };

  const updatedData = data.map((item, index) => {
    if(index === editorPosition.lineIndex) {
      return updatedLine;
    }
    return item;
  });

  return updatedData;
};

export const toLowerCaseNoSpace = (text) => {
  return text
    .split('')
    .map(char => {
      if(char === ' ') {
        return '-';
      }
      else return char.toLowerCase();
    })
    .join('');
};