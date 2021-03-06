import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';
storiesOf('Demo', module)
  .add('Fallback', function () {
    return React.createElement(ReactEmbed, {
      fallback: 'This is fallback',
      url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
    });
  })
  .add('Invalid URL', function () {
    return React.createElement(ReactEmbed, {
      url: 'asdf',
      renderVoid: function (props, state, error) {
        return React.createElement('div', null, 'Error: ', error ? error.message : '');
      },
    });
  })
  .add('Unknown block', function () {
    return React.createElement(ReactEmbed, {
      url: 'http://localhost:6010',
      renderVoid: function (props, state, error) {
        return React.createElement('div', null, 'Error: ', error ? error.message : '');
      },
    });
  })
  .add('Display router error', function () {
    return React.createElement(ReactEmbed, {
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
    return React.createElement(ReactEmbed, {
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
