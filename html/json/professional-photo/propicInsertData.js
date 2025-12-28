import {Galleries} from '../../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/professional-photo/propicData.json'
);

activeGalleries.activeApp();