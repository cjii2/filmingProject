import {Galleries} from '../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    'gallryContainer',
    'propicData.json'
);

activeGalleries.activeApp();