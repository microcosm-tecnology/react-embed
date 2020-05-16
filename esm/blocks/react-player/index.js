import * as React from 'react';
import ReactPlayer from 'react-player';
var style = {
  maxWidth: '100%',
};
var ReactPlayerWrapper = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap;
  return renderWrap(React.createElement(ReactPlayer, {url: url, style: style, controls: true, volume: 1}));
};
export default ReactPlayerWrapper;
//# sourceMappingURL=index.js.map
