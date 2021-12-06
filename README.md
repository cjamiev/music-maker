# Sheet Music Creator
UI to create sheet music

## ToDo
High Level Features:
- Dictionary for Musical Jargon
- Interval Training
- Random Music Generator
- Play Song (interpretation configuration)
- Create Sheet Music
- Display Sheet Music

DataSpec
```
const sheetMusic = {
  // text
  name: 'title',
  // Largo, Adagio, Andante, Moderato, Allegro, Vivace, Presto
  tempo: '',
  // bps number range 20 - 240?
  bps: 100,
  // C/a, G/e, D/b, A/f#, E/c#, B/g#, F#/d#, C#/a#
  keySignature: 'c#',
  // 2/4, 3/4, 4/4, 2/2, 3/2, 4/2, 2/8, 3/8, 4/8, 6/8
  timeSignature: {
    numerator: 2,
    denominator: 2
  },
  treble: [],
  dynamics: [],
  bass: []
};

const note = {
  notes: ['a1'],
  // whole, half, quarter, eigth, sixteenth and dotted eqivalents
  type: 'whole',
  symbol: '',
  modifier: {},
  pedal: ''
};

const modifier = {
  stacatto: false,
  natural: false,
  sharp: false,
  flat: false,
  rolled: false,
  accent: false,
  fermata: false,
  tenuto: false
};
```

SVG: https://blog.landr.com/music-symbols/
- Chord Numerals, Chord Letters, Numbering
- Hemiola/Triplet
- Alto/Tenor Clef
- Marcato Accent