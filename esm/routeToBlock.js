import canPlaySimplePlayer from './blocks/react-simple-player/canPlay';
import canPlay from './blocks/react-player/canPlay';
var routeTwitter = function (blocks, _a) {
  var pathname = _a.pathname;
  var steps = pathname.split('/');
  if (!steps.length) return undefined;
  return [blocks.tweet, steps[steps.length - 1]];
};
var routeYouTube = function (blocks, parsed) {
  var searchMatch = parsed.search.match(/v=([^\&]+)(&|$)/);
  var urlMatch = parsed.pathname.replace('/', '');
  if (searchMatch) {
    return [blocks.youtube, searchMatch[1]];
  } else if (urlMatch) {
    return [blocks.youtube, urlMatch];
  } else {
    return undefined;
  }
};
var routeJsFiddle = function (blocks, _a) {
  var pathname = _a.pathname;
  var steps = pathname.split('/');
  if (steps.length < 2) return undefined;
  return [blocks.jsfiddle, steps[1]];
};
var routeImgur = function (blocks, _a) {
  var url = _a.url;
  var matches = url.match(/\/(?:a|gallery)\/([^\/]+)(?:\/|$)/);
  if (!matches) return;
  return [blocks.imgur, matches[1]];
};
var routeGist = function (blocks, _a) {
  var pathname = _a.pathname;
  var steps = pathname.split('/');
  if (steps.length < 3) return undefined;
  return [blocks.gist, steps[2]];
};
var routeReplit = function (blocks, _a) {
  var pathname = _a.pathname;
  var steps = pathname.split('/');
  if (steps.length !== 3) return undefined;
  var id = steps[1] + '/' + steps[2];
  return [blocks.replit, id];
};
var routeGoogle = function (blocks, _a) {
  var pathname = _a.pathname;
  var steps = pathname.split('/');
  if (steps[1] === 'maps' && steps.length >= 3) {
    return [blocks.gmaps, ''];
  }
  return;
};
var routeGfycat = function (blocks, _a) {
  var pathname = _a.pathname;
  var steps = pathname.split('/');
  if (steps.length < 2) return undefined;
  if (!steps[1] || typeof steps[1] !== 'string') return undefined;
  var slugs = steps[1].split('-');
  return [blocks.gfycat, slugs[0]];
};
var routeToBlock = function (blocks, parsed) {
  var hostname = parsed.hostname,
    url = parsed.url;
  switch (hostname) {
    case 'twitter.com':
      return routeTwitter(blocks, parsed);
    case 'www.youtube.com':
    case 'youtu.be':
    case 'youtube.com':
      return routeYouTube(blocks, parsed);
    case 'soundcloud.com':
      return [blocks.soundcloud, ''];
    case 'jsfiddle.net':
      return routeJsFiddle(blocks, parsed);
    case 'imgur.com':
      return routeImgur(blocks, parsed);
    case 'www.instagram.com':
      return [blocks.instagram, ''];
    case 'gist.github.com':
      return routeGist(blocks, parsed);
    case 'repl.it':
      return routeReplit(blocks, parsed);
    case 'www.figma.com':
      return [blocks.figma, ''];
    case 'www.google.com':
      return routeGoogle(blocks, parsed);
    case 'gfycat.com':
      return routeGfycat(blocks, parsed);
    default:
      if (canPlaySimplePlayer(url)) {
        return [blocks.simplePlayer, ''];
      } else if (canPlay(url)) {
        return [blocks.reactPlayer, ''];
      } else {
        return undefined;
      }
  }
};
export default routeToBlock;
//# sourceMappingURL=routeToBlock.js.map
