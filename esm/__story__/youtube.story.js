import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('youtube', module)
  .add('Default', function () {
    return React.createElement(Embed, {url: 'https://www.youtube.com/watch?v=soICQ3B2kEk'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://www.youtube.com/watch?v=soICQ3B2kEk'}),
    );
  })
  .add('Shortened URL', function () {
    return React.createElement(Box, null, React.createElement(Embed, {url: 'https://youtu.be/soICQ3B2kEk'}));
  });
//# sourceMappingURL=youtube.story.js.map
