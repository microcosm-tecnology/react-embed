import * as React from 'react';
var Replit = function (_a) {
  var id = _a.id,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement('iframe', {
      height: '700px',
      width: '100%',
      frameBorder: 'no',
      allowFullScreen: true,
      src: 'https://repl.it/' + id + '?lite=true',
      scrolling: 'no',
      sandbox: 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals',
    }),
  );
};
export default Replit;
//# sourceMappingURL=index.js.map
