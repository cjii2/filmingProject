import {Galleries} from '../../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/products/productsData.json'
);

activeGalleries.activeApp();