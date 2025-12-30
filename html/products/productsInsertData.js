import {Galleries} from '../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    'gallryContainer',
    'productsData.json'
);

activeGalleries.activeApp();