import * as React from 'react';
var Gfycat = function (_a) {
  var id = _a.id,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement('iframe', {
      src: 'https://gfycat.com/ifr/' + id,
      width: '100%',
      height: '500px',
      frameBorder: '0',
      scrolling: 'no',
      allowFullScreen: true,
    }),
  );
};
export default Gfycat;
//# sourceMappingURL=index.js.map
