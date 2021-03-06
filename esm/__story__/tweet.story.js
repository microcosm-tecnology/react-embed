import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('tweet', module)
  .add('Default', function () {
    return React.createElement(Embed, {url: 'https://twitter.com/hercuppacoffee/status/911958476678561792'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://twitter.com/hercuppacoffee/status/911958476678561792'}),
    );
  })
  .add('[isDark]', function () {
    return React.createElement(Embed, {
      url: 'https://twitter.com/hercuppacoffee/status/911958476678561792',
      isDark: true,
    });
  });
//# sourceMappingURL=tweet.story.js.map
