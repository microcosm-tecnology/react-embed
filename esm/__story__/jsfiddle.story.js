import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('jsfiddle', module)
  .add('Default', function () {
    return React.createElement(Embed, {url: 'https://jsfiddle.net/0qmyaudr/'});
  })
  .add('Fitted', function () {
    return React.createElement(Box, null, React.createElement(Embed, {url: 'https://jsfiddle.net/0qmyaudr/'}));
  });
//# sourceMappingURL=jsfiddle.story.js.map
