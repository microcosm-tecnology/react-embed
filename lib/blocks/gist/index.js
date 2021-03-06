'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var fontSize = 12;
var idCnt = 0;
var Gist = (function (_super) {
  tslib_1.__extends(Gist, _super);
  function Gist() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.iframeNode = null;
    _this.id = 'react-embed-gist-' + idCnt++;
    return _this;
  }
  Gist.prototype.componentDidMount = function () {
    this._updateIframeContent();
  };
  Gist.prototype.componentDidUpdate = function (prevProps, prevState) {
    this._updateIframeContent();
  };
  Gist.prototype._defineUrl = function () {
    var _a = this.props,
      id = _a.id,
      file = _a.file;
    var fileArg = file ? '?file=' + file : '';
    return 'https://gist.github.com/' + id + '.js' + fileArg;
  };
  Gist.prototype._updateIframeContent = function () {
    var iframe = this.iframeNode;
    var doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;
    var gistLink = this._defineUrl();
    var gistScript = '<script type="text/javascript" src="' + gistLink + '"></script>';
    var styles = '<style>*{font-size:' + fontSize + 'px;}</style>';
    var resizeScript =
      'onload="parent.document.getElementById(\'' + this.id + "').style.height=document.body.scrollHeight + 'px'\"";
    var iframeHtml =
      '<html><head><base target="_parent">' +
      styles +
      '</head><body style="margin:0" ' +
      resizeScript +
      '>' +
      gistScript +
      '</body></html>';
    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  };
  Gist.prototype.render = function () {
    var _this = this;
    var renderWrap = this.props.renderWrap;
    return renderWrap(
      React.createElement('iframe', {
        id: this.id,
        ref: function (n) {
          _this.iframeNode = n;
        },
        width: '100%',
        frameBorder: 0,
        style: {margin: '0 0 -' + fontSize + 'px'},
      }),
    );
  };
  return Gist;
})(React.PureComponent);
exports.default = Gist;
//# sourceMappingURL=index.js.map
