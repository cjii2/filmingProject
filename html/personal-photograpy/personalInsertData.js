import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/personal-photograpy/personalData.json'
);

activeGalleries.activeApp();