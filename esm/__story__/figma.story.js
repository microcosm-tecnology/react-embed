import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('figma', module)
  .add('Site link', function () {
    return React.createElement(Embed, {
      url: 'https://www.figma.com/file/LFRrspoKaAYUlEHLZiLoQX/Google-Material-Design?node-id=0%3A1',
    });
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {
        url: 'https://www.figma.com/file/LFRrspoKaAYUlEHLZiLoQX/Google-Material-Design?node-id=0%3A1',
      }),
    );
  });
//# sourceMappingURL=figma.story.js.map
