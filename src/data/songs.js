const restingGrounds = {
  id: 'resting-grounds-hollow-knight',
  songTitle:'Resting Grounds',
  albumTitle:'Hollow Knight',
  cardImg:'seer.jpg',
  youtubelinks: [{
    name: 'Original',
    url: 'https://www.youtubelinks.com/watch?v=CgrBJDU2yvQ'
  },{
    name: 'Synthesia',
    url: 'https://www.youtubelinks.com/watch?v=qZ2yWvholHw'
  },{
    name: 'Hard Version',
    url: 'https://www.youtubelinks.com/watch?v=CKsz-GlZF3w'
  }],
  sheetMusicImgs: []
};
const marioTheme = {
  id: 'mario-main-theme',
  songTitle: 'Main Theme',
  albumTitle: 'Super Mario',
  cardImg: 'mario.jpg',
  youtubelinks: [
    { name: 'Super Easy', url: 'https://www.youtube.com/watch?v=7i3oM-u93xM'},
    { name: 'Easy', url: 'https://www.youtube.com/watch?v=jgvaL5b02uU'},
    { name: 'Hard', url: 'https://www.youtube.com/watch?v=XDmczii5-R0'}
  ],
  sheetMusicImgs: ['mario-theme.jpg', 'mario-theme2.jpg', 'mario-theme3.jpg']
};
const dearlyBeloved = {
  id: 'dearly-beloved-kingdom-hearts',
  songTitle: 'Dearly Beloved',
  albumTitle: 'Kingdom Hearts',
  cardImg: 'sora.jpg',
  youtubelinks: [],
  sheetMusicImgs: ['dearly-beloved.jpg']
};
const ff7Prelude = {
  id: 'final-fantasy-7-prelude',
  songTitle: 'Prelude',
  albumTitle: 'Final Fantasy 7',
  cardImg: 'meteor.jpg',
  youtubelinks: [],
  sheetMusicImgs: ['ff7-prelude.jpg']
};
const test = {
  id: 'test',
  songTitle: 'Test',
  youtubelinks: [],
  sheetMusicImgs: []
};

const songs = [restingGrounds, marioTheme, dearlyBeloved, ff7Prelude, test];

export { songs };
