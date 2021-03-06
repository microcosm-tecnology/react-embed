import {__assign} from 'tslib';
import * as React from 'react';
var renderer = function (Block, id, props, state) {
  var renderVoid = function (error) {
    return props.renderVoid(props, state, error);
  };
  return React.createElement(
    Block,
    __assign({}, state.url, {
      id: id,
      width: props.width,
      isDark: props.isDark,
      renderWrap: props.renderWrap,
      renderVoid: renderVoid,
    }),
  );
};
export default renderer;
//# sourceMappingURL=renderer.js.map
