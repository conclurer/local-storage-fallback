import jsdom = require('jsdom');

// tslint:disable-next-line
let g = <any>global;

g.document = jsdom.jsdom(`<body></body>`);
g.window = document.defaultView;
g.navigator = window.navigator;
