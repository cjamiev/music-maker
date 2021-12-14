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

Saved data will be an array where each item in the array is an object that represents which svg rendering component is to be used. 
Each object will properties 
- component = name of the component that it will map to
- transform = svg transform attribute as a string move the object to its right location
- subcomponents = array of objects that also contain component, transform and potentially subcomponent properties  
```
[{
  description: 'G# whole note dotted second element on Treble Cleff',
  component: 'Note',
	transform: 'translate(27,0)',
  subcomponents: [
    {
      component: 'WholeNote',
      transform: 'translate(5,0)'
    },
    {
      component: 'Dotted',
      transform: 'translate(5,0)'
    },
    {
      component: 'Sharp',
      transform: 'translate(0,5)'
    }
  ]
}]
```

## ToDo
- Mapper for converting json data into the sheet music grid
- Cleanup each of the svg components 
- Test with json data for each of the conditionals/parameters
- Slur & Tie generator and controller
- Beam note generator
- Form for creating json data
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