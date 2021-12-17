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
- conditions = some elements will either be shown or hidden as opposed to moved around separately. 
- subcomponents = array of objects that also contain component, transform and conditions 
```
[{
  component: 'Note',
	transform: 'translate(27,0)',
  subcomponents: [
    {
      component: 'StemmedNoteSVG',
      transform: 'translate(5,0)'
      conditions: { showNoteStem: true, showHalfNote: true }
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
Text Data
tempo: Alla marcia Aellgro Allegretto Andante Moderately Moderato Slowly Vivace Strict 
  Lively march tempo
time: 2,3,4,5,6,7,8,9,10,11,12
dynamics: 'ppp', 'pp', 'p', 'mp', 'fp', 'mf', 'f', 'ff', 'fff', 'sfz', 'dim.', 'rit.',   
  'decresc.', 'cresc.', 'leggiero', 'a tempo', 'risoluto', 'dim. e poco rit.', 'poco rit.'
repeat: D. C. al Fine, D.S. al Fine, Fine, D. C.
chord notation: C Cm Caug Cdim Csus C6 Cm6 C7 CM7 Cm7 C9 CM9
chord numerals: I ii iii IV V vi vii° i ii° III iv v VI VII

## ToDo
- Test with json data for each of the conditionals/parameters
- Slur & Tie generator and controller
- Beam note generator
- Text Component
  - Normal Font -> font-family: Arial, sans-serif;
  - Small gap Font -> font-family: Tahoma, sans-serif;
  - Large gap Font -> font-family: 'Courier New', monospace;
  - Cursive Font -> font-family: 'Brush Script MT', cursive;
- Custom SVG placer
	- Cycle through any existing svg component
	- Be able to manually place it anywhere in the sheet music
- Form for creating json data
- Outline (clickable) for each cell of the grid
- Transpose scales
- Save in localStorage and json file
- Load from localStorage and json file

SVG Objects: https://blog.landr.com/music-symbols/
- Hemiola/Triplet
- Alto/Tenor Clef
- Marcato Accent