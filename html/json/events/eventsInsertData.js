import {Galleries} from '../../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/events/eventsData.json'
);

activeGalleries.activeApp();