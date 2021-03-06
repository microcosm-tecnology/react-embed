import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('replit', module)
  .add('Site link', function () {
    return React.createElement(Embed, {url: 'https://repl.it/@VadimsDaleckis/AwesomeHiddenPublisher'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://repl.it/@VadimsDaleckis/AwesomeHiddenPublisher'}),
    );
  });
//# sourceMappingURL=replit.story.js.map
