import {Galleries} from '../../js/MainCreateCards'

const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/professional-photo/propicData.json'
);

activeGalleries.activeApp();