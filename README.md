# Sheet Music Creator
Application to create sheet music. 

## Features (WIP)
- Create, View and Play Sheet Music
- Training Page (Interval, Scales)
- Dictionary for Musical Jargon
- Random Music Generator

## Data Spec
Viewing sheet music as a grid of svg objects each cell can be described by the properties of what is displayed.
For example the first cell would be Clef, second cell would be Key Signature, third cell would be Time Signature,
fourth cell be the first note. 

An array where each element is an object that represents which svg rendering component is to be used. 
Each object will reference component name, optional classNames to update the svg elements, transformation to
move the object to its right location. As well as subcomponent section for conditionally rendered elements as 
well as its transformation properties.  
```
[{
  description: 'G# whole note dotted second element on Treble Cleff',
  component: 'note',
	classNames: ['red'],  
	transform: {
    translateX: 105
  },
  subcomponents: {
    wholeNote: {
      translateY: 5
    }
    dotted: {}
    sharp: {
      translateY: 5
    },
  }
}]
```

## ToDo
- Mapper for converting json data into the sheet music grid
- Form for creating json data
  - Keyboard
  - Slur & Tie generator and controller
  - Beam note generator
- Outline (clickable) for each cell of the grid
- Transpose scales
- Save in localStorage and json file
- Load from localStorage and json file

SVG Objects: https://blog.landr.com/music-symbols/
- Hemiola/Triplet
- Alto/Tenor Clef
- Marcato Accent
- fortepiano (fp)
- G-clef Ottava Alta
- G-clef Ottava Bass