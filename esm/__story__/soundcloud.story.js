import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('soundcloud', module)
  .add('Default', function () {
    return React.createElement(Embed, {url: 'https://soundcloud.com/s1sh1/kravts-glupyy-molodoy-na-meli'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://soundcloud.com/s1sh1/kravts-glupyy-molodoy-na-meli'}),
    );
  });
//# sourceMappingURL=soundcloud.story.js.map
