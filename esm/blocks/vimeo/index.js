import * as React from 'react';
import ReactPlayer from 'react-player';
var Vimeo = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap;
  return renderWrap(React.createElement(ReactPlayer, {url: url}));
};
export default Vimeo;
//# sourceMappingURL=index.js.map
