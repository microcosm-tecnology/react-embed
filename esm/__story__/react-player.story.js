import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('react-player', module)
  .add('Facebook', function () {
    return React.createElement(Embed, {url: 'https://www.facebook.com/OddCouplesDodo/videos/2002998246626642/'});
  })
  .add('Twitch', function () {
    return React.createElement(Embed, {url: 'https://www.twitch.tv/videos/290187802'});
  })
  .add('Twitch Fitted', function () {
    return React.createElement(Box, null, React.createElement(Embed, {url: 'https://www.twitch.tv/videos/290187802'}));
  })
  .add('DailyMotion', function () {
    return React.createElement(Embed, {url: 'https://www.dailymotion.com/video/x75y5s2?playlist=x63vyg'});
  })
  .add('Vimeo', function () {
    return React.createElement(Embed, {url: 'https://vimeo.com/54763818'});
  })
  .add('Vimeo Fitted', function () {
    return React.createElement(Box, null, React.createElement(Embed, {url: 'https://vimeo.com/54763818'}));
  });
//# sourceMappingURL=react-player.story.js.map
