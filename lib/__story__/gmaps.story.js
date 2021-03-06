'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
var Box_1 = require('./Box');
react_1
  .storiesOf('gmaps', module)
  .add('Site link', function () {
    return React.createElement(__1.default, {url: 'https://www.google.com/maps/@46.5084367,6.5426424,15z'});
  })
  .add('Search link', function () {
    return React.createElement(__1.default, {
      url:
        'https://www.google.com/maps/place/London,+UK/@51.5140318,-0.3089719,11z/data=!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583',
    });
  })
  .add('Fitted', function () {
    return React.createElement(
      Box_1.Box,
      null,
      React.createElement(__1.default, {url: 'https://www.google.com/maps/@46.5084367,6.5426424,15z'}),
    );
  });
//# sourceMappingURL=gmaps.story.js.map
