import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    'gallryContainer',
    'eventsData.json'
);

activeGalleries.activeApp();