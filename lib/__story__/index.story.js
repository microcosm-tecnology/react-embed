'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
react_1
  .storiesOf('Demo', module)
  .add('Fallback', function () {
    return React.createElement(__1.default, {
      fallback: 'This is fallback',
      url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
    });
  })
  .add('Invalid URL', function () {
    return React.createElement(__1.default, {
      url: 'asdf',
      renderVoid: function (props, state, error) {
        return React.createElement('div', null, 'Error: ', error ? error.message : '');
      },
    });
  })
  .add('Unknown block', function () {
    return React.createElement(__1.default, {
      url: 'http://localhost:6010',
      renderVoid: function (props, state, error) {
        return React.createElement('div', null, 'Error: ', error ? error.message : '');
      },
    });
  })
  .add('Display router error', function () {
    return React.createElement(__1.default, {
      url: 'http://localhost:6010',
      router: function () {
        throw new Error('foo');
      },
      renderVoid: function (props, state, error) {
        return React.createElement('div', null, 'Error: ', error ? error.message : '');
      },
    });
  })
  .add('wrapper', function () {
    return React.createElement(__1.default, {
      fallback: 'This is fallback',
      url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
      renderWrap: function (children) {
        return React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid red',
            },
          },
          children,
        );
      },
    });
  });
//# sourceMappingURL=index.story.js.map
