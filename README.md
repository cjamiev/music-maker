# Music Maker

Application to create & play music.

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
- attributes = object containing width, height, x,y,cx,cy, etc for svg elements.
- content = object containing textual information to be displayed in svg elements.
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
      component: 'ChordNotation',
      transform: 'translate(0,0)',
      content: { notationKey: 'Cb', notationQuality: 'sus' }
    }
  ]
}]
```

## ToDo

- chord notation
- finger numbers
- Custom Text Component
  - Normal Font -> font-family: Arial, sans-serif;
  - Small gap Font -> font-family: Tahoma, sans-serif;
  - Large gap Font -> font-family: 'Courier New', monospace;
  - Cursive Font -> font-family: 'Brush Script MT', cursive;
- Easy Way to Switch Between Create/Edit/View
- Add sounds to the site
- Interval Training Section
- Beam Constructor
- Triplet Constructor
- Side Panel will have images
- Click on Image to enlarge
- Pages to swap images
- rolled modifier
- Grace Note Constructor
- Slur/Tie Constructor
- Clef Ottava option
- Transpose scales
- Repeat Selector
- Evenly Spacing Note
- Custom SVG placer
  - Cycle through any existing svg component
  - Be able to drag or use controller to place it anywhere in the sheet music
