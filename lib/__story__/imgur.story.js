'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
var Box_1 = require('./Box');
react_1
  .storiesOf('imgur', module)
  .add('Site link', function () {
    return React.createElement(__1.default, {url: 'https://imgur.com/gallery/5ejrmYX'});
  })
  .add('Embed link', function () {
    return React.createElement(__1.default, {url: 'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box_1.Box,
      null,
      React.createElement(__1.default, {url: 'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340'}),
    );
  });
//# sourceMappingURL=imgur.story.js.map
