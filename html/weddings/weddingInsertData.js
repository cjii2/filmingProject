import {Galleries} from '../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    'gallryContainer',
    'weddingData.json'
);

activeGalleries.activeApp();