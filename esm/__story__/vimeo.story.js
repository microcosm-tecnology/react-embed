import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('vimeo', module)
  .add('Default', function () {
    return React.createElement(Embed, {url: 'https://vimeo.com/54763818'});
  })
  .add('"The music scene"', function () {
    return React.createElement(Embed, {url: 'https://vimeo.com/12622016'});
  })
  .add('Fitted', function () {
    return React.createElement(Box, null, React.createElement(Embed, {url: 'https://vimeo.com/12622016'}));
  });
//# sourceMappingURL=vimeo.story.js.map
