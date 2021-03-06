import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('gfycat', module)
  .add('Site link', function () {
    return React.createElement(Embed, {url: 'https://gfycat.com/snivelingflimsyfunnelweaverspider'});
  })
  .add('Site link - 2', function () {
    return React.createElement(Embed, {url: 'https://gfycat.com/bittervainchuckwalla-airplane-transportation'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://gfycat.com/snivelingflimsyfunnelweaverspider'}),
    );
  });
//# sourceMappingURL=gfycat.story.js.map
