import { restingGroundsHollowKnight } from './resting-grounds-hollow-knight';
import { morningOfRemembranceBleach } from './morning-of-remembrance-bleach';
import { testSheetMusic } from './testing-notation';

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
  songTitle: 'Mario Theme',
  albumTitle: 'Super Mario',
  cardImg: 'mario.png',
  youtubelinks: [
    { name: 'Super Easy', url: 'https://www.youtube.com/watch?v=7i3oM-u93xM'},
    { name: 'Easy', url: 'https://www.youtube.com/watch?v=jgvaL5b02uU'},
    { name: 'Hard', url: 'https://www.youtube.com/watch?v=XDmczii5-R0'}
  ],
  sheetMusicImgs: []
};
const dearlyBeloved = {
  id: 'dearly-beloved-kingdom-hearts',
  songTitle: 'Dearly Beloved',
  albumTitle: 'Kingdom Hearts',
  cardImg: 'sora.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const ff7Prelude = {
  id: 'final-fantasy-7-prelude',
  songTitle: 'FF7 Prelude',
  albumTitle: 'Final Fantasy 7',
  cardImg: 'meteor.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const homeAwayFromHome = {
  id: 'ff7-remake-home-away-from-home',
  songTitle: 'Home Away From Home',
  albumTitle: 'FF7 Remake',
  cardImg: 'aerith.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const ginyuTransformation = {
  id: 'dbz-ginyu-transformation',
  songTitle: 'Ginyu Transformation',
  albumTitle: 'DragonBall Z',
  cardImg: 'ginyu.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const groovyDiscotech = {
  id: 'dbz-groovy-discotech',
  songTitle: 'Groovy Discotech',
  albumTitle: 'DragonBall Z',
  cardImg: 'gohan2.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const gohansAnger = {
  id: 'dbz-gohans-anger',
  songTitle: 'Gohan\'s Anger',
  albumTitle: 'DragonBall Z',
  cardImg: 'gohan.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const hellsBells = {
  id: 'dbz-hells-bells',
  songTitle: 'Hells Bells',
  albumTitle: 'DragonBall Z',
  cardImg: 'vegeta.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const morningOfRemembrance = {
  id: 'morning-of-remembrance-bleach',
  songTitle: 'Morning of Remembrance',
  albumTitle: 'Bleach',
  cardImg: 'ichigo.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const mortalKombat = {
  id: 'techno-syndrome',
  songTitle: 'Techno Syndrome',
  albumTitle: 'The Immortals',
  cardImg: 'mortal-kombat.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const robinTheme = {
  id: 'robin-theme',
  songTitle: 'Robin',
  albumTitle: 'Iconoclasts',
  cardImg: 'robin.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const sonicTheme = {
  id: 'sonic-theme',
  songTitle: 'Sonic Theme',
  albumTitle: 'Sega',
  cardImg: 'sonic.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const attackOnDina = {
  id: 'attack-on-dina',
  songTitle: 'Attack on Dina',
  albumTitle: 'Attack on Titan',
  cardImg: 'titan-dina.jpg',
  youtubelinks: [],
  sheetMusicImgs: []
};
const test = {
  id: 'test',
  songTitle: 'Test',
  youtubelinks: [],
  sheetMusicImgs: []
};

const songs = [
  restingGrounds,
  marioTheme,
  dearlyBeloved,
  ff7Prelude,
  homeAwayFromHome,
  ginyuTransformation,
  groovyDiscotech,
  gohansAnger,
  hellsBells,
  mortalKombat,
  robinTheme,
  sonicTheme,
  attackOnDina,
  morningOfRemembrance,
  test
];
const songsWithSheetMusic = [
  { id: 'resting-grounds-hollow-knight', songRawData: restingGroundsHollowKnight },
  { id: 'morning-of-remembrance-bleach', songRawData: morningOfRemembranceBleach },
  { id: 'test', sheets: testSheetMusic }
];

export { songs, songsWithSheetMusic };
