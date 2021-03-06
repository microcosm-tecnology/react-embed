'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_simple_player_1 = require('react-simple-player');
var SimplePlayerWrapper = function (_a) {
  var url = _a.url,
    isDark = _a.isDark,
    width = _a.width,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement(react_simple_player_1.Player, {
      src: url,
      height: 50,
      hideVolume: width < 500,
      grey: isDark ? [20, 23, 26] : [240, 243, 246],
    }),
  );
};
exports.default = SimplePlayerWrapper;
//# sourceMappingURL=index.js.map
