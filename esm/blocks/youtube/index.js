import * as React from 'react';
import YouTube from 'react-youtube';
import {rule} from 'p4-css';
var blockClass = rule({
  w: '100%',
});
var iframeClass = rule({
  d: 'block',
  maxW: '100%',
  w: '100%',
});
var Y = YouTube;
var YouTubeWrapper = function (_a) {
  var id = _a.id,
    renderWrap = _a.renderWrap;
  return renderWrap(React.createElement(Y, {videoId: id, containerClassName: blockClass, className: iframeClass}));
};
export default YouTubeWrapper;
//# sourceMappingURL=index.js.map
