var MATCH_AUDIO_FILE = /\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;
var canPlay = function (url) {
  return MATCH_AUDIO_FILE.test(url);
};
export default canPlay;
//# sourceMappingURL=canPlay.js.map
