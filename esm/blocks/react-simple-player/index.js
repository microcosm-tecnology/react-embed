import * as React from 'react';
import {Player} from 'react-simple-player';
var SimplePlayerWrapper = function (_a) {
  var url = _a.url,
    isDark = _a.isDark,
    width = _a.width,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement(Player, {
      src: url,
      height: 50,
      hideVolume: width < 500,
      grey: isDark ? [20, 23, 26] : [240, 243, 246],
    }),
  );
};
export default SimplePlayerWrapper;
//# sourceMappingURL=index.js.map
