import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    'gallryContainer',
    'personalData.json'
);

activeGalleries.activeApp();