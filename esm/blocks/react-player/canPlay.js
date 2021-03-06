var MATCH_URL_FILE = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|mp4|og[gv]|webm|mov|m4v|m3u8|mpd)($|\?)/i;
var canPlayFile = function (url) {
  return MATCH_URL_FILE.test(url);
};
var MATCH_URL_FACEBOOK = /facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/;
var canPlayFacebook = function (url) {
  return MATCH_URL_FACEBOOK.test(url);
};
var MATCH_VIDEO_URL_TWITCH = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
var MATCH_CHANNEL_URL_TWITCH = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/;
var canPlayTwitch = function (url) {
  return MATCH_VIDEO_URL_TWITCH.test(url) || MATCH_CHANNEL_URL_TWITCH.test(url);
};
var MATCH_URL_DAILY_MOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
var canPlayDailyMotion = function (url) {
  return MATCH_URL_DAILY_MOTION.test(url);
};
var MATCH_URL_VIMEO = /vimeo\.com\/.+/;
var MATCH_FILE_URL_VIMEO = /vimeo\.com\/external\/.+\.mp4/;
var canPlayVimeo = function (url) {
  if (MATCH_FILE_URL_VIMEO.test(url)) {
    return false;
  }
  return MATCH_URL_VIMEO.test(url);
};
var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
var canPlayMixcloud = function (url) {
  return MATCH_URL_MIXCLOUD.test(url);
};
var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
var canPlayStreamable = function (url) {
  return MATCH_URL_STREAMABLE.test(url);
};
var canPlay = function (url) {
  return (
    canPlayFacebook(url) ||
    canPlayTwitch(url) ||
    canPlayDailyMotion(url) ||
    canPlayVimeo(url) ||
    canPlayMixcloud(url) ||
    canPlayStreamable(url) ||
    canPlayFile(url)
  );
};
export default canPlay;
//# sourceMappingURL=canPlay.js.map
