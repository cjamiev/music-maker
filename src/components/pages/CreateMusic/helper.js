const ZERO = 0;
const ONE = 1;

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

export const cloneLineToNextLine = (lineToCopy) => {
  const ottavaAlta = lineToCopy.ottavaAlta || [];
  const dynamics = lineToCopy.dynamics || [];
  const pedal = lineToCopy.pedal || [];
  const measure = lineToCopy.measure || [];
  const ottavaBassa = lineToCopy.ottavaBassa || [];
  const pageIndex = lineToCopy.treble[ZERO].pageIndex;
  const lineIndex = lineToCopy.treble[ZERO].lineIndex + ONE;

  return {
    ottavaAlta: ottavaAlta.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    }),
    treble: lineToCopy.treble.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    }),
    dynamics: dynamics.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    }),
    bass: lineToCopy.bass.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    }),
    pedal: pedal.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    }),
    measure: measure.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    }),
    ottavaBassa: ottavaBassa.map((item) => {
      const id = `${pageIndex},${lineIndex},${item.columnIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: item.columnIndex,
        id
      };
    })
  };
};

export const reorderLineIndex = (lineToReindex, newLineIndex) => {
  const ottavaAlta = lineToReindex.ottavaAlta || [];
  const dynamics = lineToReindex.dynamics || [];
  const pedal = lineToReindex.pedal || [];
  const measure = lineToReindex.measure || [];
  const ottavaBassa = lineToReindex.ottavaBassa || [];

  return {
    ottavaAlta: ottavaAlta.map(item => {
      const id = `${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    }),
    treble: lineToReindex.treble.map(item => {
      const id = `${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    }),
    dynamics: dynamics.map(item => {
      const id =`${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    }),
    bass: lineToReindex.bass.map(item => {
      const id = `${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    }),
    pedal: pedal.map(item => {
      const id = `${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    }),
    measure: measure.map(item => {
      const id = `${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    }),
    ottavaBassa: ottavaBassa.map(item => {
      const id = `${item.pageIndex},${newLineIndex},${item.columnIndex}`;
      return {
        ...item,
        id,
        lineIndex: newLineIndex
      };
    })
  };
};


export const swapDataPositions = ({lineToCopy, pageIndex, lineIndex }) => {
  const ottavaAlta = lineToCopy.ottavaAlta || [];
  const dynamics = lineToCopy.dynamics || [];
  const pedal = lineToCopy.pedal || [];
  const measure = lineToCopy.measure || [];
  const ottavaBassa = lineToCopy.ottavaBassa || [];

  return {
    ottavaAlta: ottavaAlta.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    }),
    treble: lineToCopy.treble.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    }),
    dynamics: dynamics.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    }),
    bass: lineToCopy.bass.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    }),
    pedal: pedal.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    }),
    measure: measure.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    }),
    ottavaBassa: ottavaBassa.map((item, itemIndex) => {
      const id = `${pageIndex},${lineIndex},${itemIndex}`;
      return {
        ...item,
        pageIndex,
        lineIndex,
        columnIndex: itemIndex,
        id
      };
    })
  };
};
