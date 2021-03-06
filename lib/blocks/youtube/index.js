'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_youtube_1 = tslib_1.__importDefault(require('react-youtube'));
var p4_css_1 = require('p4-css');
var blockClass = p4_css_1.rule({
  w: '100%',
});
var iframeClass = p4_css_1.rule({
  d: 'block',
  maxW: '100%',
  w: '100%',
});
var Y = react_youtube_1.default;
var YouTubeWrapper = function (_a) {
  var id = _a.id,
    renderWrap = _a.renderWrap;
  return renderWrap(React.createElement(Y, {videoId: id, containerClassName: blockClass, className: iframeClass}));
};
exports.default = YouTubeWrapper;
//# sourceMappingURL=index.js.map
