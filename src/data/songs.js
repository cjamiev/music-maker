import {hollowKnightRestingGroundsData } from './resting-grounds-sheet-music';

const dearlyBeloved = {
  id: '0',
  songTitle: 'Dearly Beloved',
  albumTitle: 'Kingdom Hearts',
  cardImg: 'sora.jpg',
  sheetMusicImg: ['dearly-beloved.jpg']
};
const ff7Prelude = {
  id: '1',
  songTitle: 'Prelude',
  albumTitle: 'Final Fantasy 7',
  cardImg: 'meteor.jpg',
  sheetMusicImg: ['ff7-prelude.jpg']
};
const marioTheme = {
  id: '2',
  songTitle: 'Main Theme',
  albumTitle: 'Super Mario',
  cardImg: 'mario.jpg',
  sheetMusicImg: ['mario-theme.jpg', 'mario-theme2.jpg', 'mario-theme3.jpg']
};
const restingGrounds = {
  id: '3',
  songTitle:'Resting Grounds',
  albumTitle:'Hollow Knight',
  cardImg:'seer.jpg',
  sheetMusicImg: [],
  sheets: hollowKnightRestingGroundsData
};
const test = {
  id: '4',
  songTitle: 'Test',
  sheetMusicImg: []
};

const songs = [dearlyBeloved, ff7Prelude, marioTheme, restingGrounds, test];

export { songs };