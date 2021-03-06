import * as React from 'react';
import {rule} from 'p4-css';
var blockClass = rule({
  w: '100%',
  '&>div': {
    pos: 'relative',
    padb: '56.25%',
    h: 0,
  },
  '& iframe': {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: '100%',
    h: '100%',
  },
});
var JsFiddle = function (_a) {
  var id = _a.id,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement(
      'div',
      {className: blockClass},
      React.createElement(
        'div',
        null,
        React.createElement('iframe', {
          src: 'https://jsfiddle.net/' + id + '/embedded/',
          frameBorder: '0',
          allowFullScreen: true,
        }),
      ),
    ),
  );
};
export default JsFiddle;
//# sourceMappingURL=index.js.map
