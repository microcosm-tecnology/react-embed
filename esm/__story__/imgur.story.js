import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';
storiesOf('imgur', module)
  .add('Site link', function () {
    return React.createElement(Embed, {url: 'https://imgur.com/gallery/5ejrmYX'});
  })
  .add('Embed link', function () {
    return React.createElement(Embed, {url: 'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box,
      null,
      React.createElement(Embed, {url: 'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340'}),
    );
  });
//# sourceMappingURL=imgur.story.js.map
