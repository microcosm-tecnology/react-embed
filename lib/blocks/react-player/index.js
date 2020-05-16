'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_player_1 = tslib_1.__importDefault(require('react-player'));
var style = {
  maxWidth: '100%',
};
var ReactPlayerWrapper = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap;
  return renderWrap(React.createElement(react_player_1.default, {url: url, style: style, controls: true, volume: 1}));
};
exports.default = ReactPlayerWrapper;
//# sourceMappingURL=index.js.map
