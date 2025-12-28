import {Galleries} from '../../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/nature/DataOfNature.json'
);

activeGalleries.activeApp();