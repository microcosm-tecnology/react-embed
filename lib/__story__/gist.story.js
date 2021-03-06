'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
var Box_1 = require('./Box');
react_1
  .storiesOf('gist', module)
  .add('Site link', function () {
    return React.createElement(__1.default, {
      url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
    });
  })
  .add('Three links', function () {
    return React.createElement(
      'div',
      null,
      React.createElement(__1.default, {url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'}),
      React.createElement(__1.default, {url: 'https://gist.github.com/rikniitt/d32c9ed81ce72acf23a6d8fb12d95e6f'}),
      React.createElement(__1.default, {url: 'https://gist.github.com/choco-bot/c588cdb67a420b21133f30f3e5645b22'}),
    );
  })
  .add('Fitted', function () {
    return React.createElement(
      Box_1.Box,
      null,
      React.createElement(__1.default, {url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'}),
    );
  });
//# sourceMappingURL=gist.story.js.map
