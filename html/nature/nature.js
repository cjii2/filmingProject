import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    'gallryContainer',
    'DataOfNature.json'
);

activeGalleries.activeApp();