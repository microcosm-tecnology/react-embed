'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var p4_css_1 = require('p4-css');
var blockClass = p4_css_1.rule({
  d: 'block',
  ov: 'hidden',
  w: '100%',
  bd: '1px solid #E5E9F2',
  bdrad: '6px',
  '& iframe': {
    d: 'block',
    ov: 'hidden',
    bd: 0,
    w: '100%',
    h: '450px',
    bdrad: '8px',
  },
});
var Figma = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement(
      'div',
      {className: blockClass},
      React.createElement('iframe', {
        src: 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent(url),
        allowFullScreen: true,
      }),
    ),
  );
};
exports.default = Figma;
//# sourceMappingURL=index.js.map
