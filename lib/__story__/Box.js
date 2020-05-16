'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.Box = void 0;
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var blockStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid red',
};
exports.Box = function (_a) {
  var children = _a.children;
  return React.createElement('div', {style: blockStyle}, children);
};
//# sourceMappingURL=Box.js.map
