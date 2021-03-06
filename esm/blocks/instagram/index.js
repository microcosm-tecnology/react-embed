import * as React from 'react';
import InstagramEmbed from 'react-instagram-embed';
var Instagram = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement(InstagramEmbed, {
      url: url,
      maxWidth: 320,
      hideCaption: false,
      containerTagName: 'div',
      protocol: '',
      injectScript: true,
      onLoading: function () {},
      onSuccess: function () {},
      onAfterRender: function () {},
      onFailure: function () {},
    }),
  );
};
export default Instagram;
//# sourceMappingURL=index.js.map
