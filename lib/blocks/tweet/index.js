'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var p4_css_1 = require('p4-css');
var blockClass = p4_css_1.rule({
  maxW: '100%',
  'twitter-widget': {
    mar: '0 !important',
  },
});
var wnd = window;
var TwitterTweet = (function (_super) {
  tslib_1.__extends(TwitterTweet, _super);
  function TwitterTweet() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.mounted = true;
    return _this;
  }
  TwitterTweet.prototype.componentDidMount = function () {
    var _this = this;
    require('scriptjs')('https://platform.twitter.com/widgets.js', 'tw', function () {
      if (!_this.mounted) return;
      if (!wnd.twttr) {
        console.error('Failed to load Twitter lib.');
        return;
      }
      wnd.twttr.widgets.createTweet(_this.props.id, _this.refs.ref, {theme: _this.props.isDark ? 'dark' : 'light'});
    });
  };
  TwitterTweet.prototype.componentWillUnmount = function () {
    this.mounted = false;
  };
  TwitterTweet.prototype.render = function () {
    return this.props.renderWrap(React.createElement('div', {ref: 'ref', className: blockClass}));
  };
  return TwitterTweet;
})(React.PureComponent);
exports.default = TwitterTweet;
//# sourceMappingURL=index.js.map
