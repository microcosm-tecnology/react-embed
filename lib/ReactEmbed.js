'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ReactEmbed = void 0;
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var routeToBlock_1 = tslib_1.__importDefault(require('./routeToBlock'));
var renderer_1 = tslib_1.__importDefault(require('./renderer'));
var figma_1 = tslib_1.__importDefault(require('./blocks/figma'));
var gist_1 = tslib_1.__importDefault(require('./blocks/gist'));
var gmaps_1 = tslib_1.__importDefault(require('./blocks/gmaps'));
var imgur_1 = tslib_1.__importDefault(require('./blocks/imgur'));
var instagram_1 = tslib_1.__importDefault(require('./blocks/instagram'));
var jsfiddle_1 = tslib_1.__importDefault(require('./blocks/jsfiddle'));
var react_simple_player_1 = tslib_1.__importDefault(require('./blocks/react-simple-player'));
var react_player_1 = tslib_1.__importDefault(require('./blocks/react-player'));
var replit_1 = tslib_1.__importDefault(require('./blocks/replit'));
var soundcloud_1 = tslib_1.__importDefault(require('./blocks/soundcloud'));
var tweet_1 = tslib_1.__importDefault(require('./blocks/tweet'));
var youtube_1 = tslib_1.__importDefault(require('./blocks/youtube'));
var gfycat_1 = tslib_1.__importDefault(require('./blocks/gfycat'));
var IS_BROWSER = typeof window === 'object';
var defaultBlocks = {
  figma: figma_1.default,
  gist: gist_1.default,
  gmaps: gmaps_1.default,
  imgur: imgur_1.default,
  instagram: instagram_1.default,
  jsfiddle: jsfiddle_1.default,
  simplePlayer: react_simple_player_1.default,
  reactPlayer: react_player_1.default,
  replit: replit_1.default,
  soundcloud: soundcloud_1.default,
  tweet: tweet_1.default,
  youtube: youtube_1.default,
  gfycat: gfycat_1.default,
};
var renderNull = function () {
  return null;
};
var renderWrap = function (children) {
  return children;
};
var ReactEmbed = (function (_super) {
  tslib_1.__extends(ReactEmbed, _super);
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
    router: routeToBlock_1.default,
    render: renderer_1.default,
    renderVoid: renderNull,
    renderWrap: renderWrap,
  };
  return ReactEmbed;
})(React.PureComponent);
exports.ReactEmbed = ReactEmbed;
exports.default = ReactEmbed;
//# sourceMappingURL=ReactEmbed.js.map
