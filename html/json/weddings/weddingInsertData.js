import {Galleries} from '../../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/weddings/weddingData.json'
);

activeGalleries.activeApp();