import {__extends} from 'tslib';
import * as React from 'react';
import defaultRouter from './routeToBlock';
import defaultRender from './renderer';
import Figma from './blocks/figma';
import Gist from './blocks/gist';
import Gmaps from './blocks/gmaps';
import Imgur from './blocks/imgur';
import Instagram from './blocks/instagram';
import JsFiddle from './blocks/jsfiddle';
import SimplePlayerWrapper from './blocks/react-simple-player';
import ReactPlayerWrapper from './blocks/react-player';
import Replit from './blocks/replit';
import SoundCloud from './blocks/soundcloud';
import TwitterTweet from './blocks/tweet';
import YouTubeWrapper from './blocks/youtube';
import Gfycat from './blocks/gfycat';
var IS_BROWSER = typeof window === 'object';
var defaultBlocks = {
  figma: Figma,
  gist: Gist,
  gmaps: Gmaps,
  imgur: Imgur,
  instagram: Instagram,
  jsfiddle: JsFiddle,
  simplePlayer: SimplePlayerWrapper,
  reactPlayer: ReactPlayerWrapper,
  replit: Replit,
  soundcloud: SoundCloud,
  tweet: TwitterTweet,
  youtube: YouTubeWrapper,
  gfycat: Gfycat,
};
var renderNull = function () {
  return null;
};
var renderWrap = function (children) {
  return children;
};
var ReactEmbed = (function (_super) {
  __extends(ReactEmbed, _super);
  function ReactEmbed() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {};
    return _this;
  }
  ReactEmbed.getDerivedStateFromProps = function (props) {
    if (!IS_BROWSER) return null;
    if (typeof props.url === 'string') {
      try {
        var url = new URL(props.url);
        var hostname = url.hostname,
          pathname = url.pathname,
          search = url.search,
          hash = url.hash;
        return {
          url: {
            url: props.url,
            hostname: hostname,
            pathname: pathname,
            search: search,
            hash: hash,
          },
        };
      } catch (error) {
        return {error: error};
      }
    } else {
      return undefined;
    }
  };
  ReactEmbed.getDerivedStateFromError = function (error) {
    return {error: error};
  };
  ReactEmbed.prototype.render = function () {
    if (!IS_BROWSER) return null;
    var _a = this,
      props = _a.props,
      state = _a.state;
    if (state.error) return props.renderVoid(props, state, state.error);
    var result;
    try {
      result = props.router(props.blocks, state.url);
    } catch (error) {
      console.error('Could not route block:', error);
      return props.renderVoid(props, state, error);
    }
    if (!result || !result[0]) return props.renderVoid(props, state);
    var _b = result,
      Block = _b[0],
      id = _b[1];
    return props.render(Block, id, props, state);
  };
  ReactEmbed.defaultProps = {
    width: typeof window === 'object' ? window.innerWidth : 0,
    isDark: false,
    blocks: defaultBlocks,
    router: defaultRouter,
    render: defaultRender,
    renderVoid: renderNull,
    renderWrap: renderWrap,
  };
  return ReactEmbed;
})(React.PureComponent);
export {ReactEmbed};
export default ReactEmbed;
//# sourceMappingURL=ReactEmbed.js.map
