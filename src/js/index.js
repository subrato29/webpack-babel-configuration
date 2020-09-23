import str from './models/Search';

//import {add as a, multiply as m, ID} from './views/SearchViews';

import * as searchViews from './views/SearchViews';

//console.log ('Using imported function ' + a(ID, 2) + '--' + m(3, 5));
console.log ('Using imported function ' + searchViews.add(searchViews.ID, 2) + '--' + searchViews.multiply(3, 5));