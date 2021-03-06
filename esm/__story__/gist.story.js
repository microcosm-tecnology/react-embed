import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('gist', module)
  .add('Site link', function () {
    return React.createElement(Embed, {url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'});
  })
  .add('Three links', function () {
    return React.createElement(
      'div',
      null,
      React.createElement(Embed, {url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'}),
      React.createElement(Embed, {url: 'https://gist.github.com/rikniitt/d32c9ed81ce72acf23a6d8fb12d95e6f'}),
      React.createElement(Embed, {url: 'https://gist.github.com/choco-bot/c588cdb67a420b21133f30f3e5645b22'}),
    );
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'}),
    );
  });
//# sourceMappingURL=gist.story.js.map
