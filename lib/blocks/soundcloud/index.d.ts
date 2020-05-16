import * as React from 'react';
import {BlockProps} from '../..';
export interface SoundCloudProps extends BlockProps {
  autoplay?: boolean;
  hideRelated?: boolean;
  showComments?: boolean;
  showUser?: boolean;
  showReposts?: boolean;
  isVisual?: boolean;
}
declare const SoundCloud: React.SFC<SoundCloudProps>;
export default SoundCloud;
