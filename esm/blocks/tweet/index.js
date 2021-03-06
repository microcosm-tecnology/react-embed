import {__extends} from 'tslib';
import * as React from 'react';
import {rule} from 'p4-css';
var blockClass = rule({
  maxW: '100%',
  'twitter-widget': {
    mar: '0 !important',
  },
});
var wnd = window;
var TwitterTweet = (function (_super) {
  __extends(TwitterTweet, _super);
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
export default TwitterTweet;
//# sourceMappingURL=index.js.map
