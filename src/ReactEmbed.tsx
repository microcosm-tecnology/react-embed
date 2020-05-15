import * as React from 'react';
import defaultRouter from './routeToBlock';
import defaultRender from './renderer';
import Figma from './blocks/figma';
import Gist from './blocks/gist';
import Gmaps from './blocks/gmaps';
import Imgur from './blocks/imgur';
import Instagram from './blocks/instagram';
import JsFiddle from './blocks/jsfiddle';
import SimplePlayerWrapper from './blocks/react-simple-player';
import ReactPlayerWrapper from './blocks/react-player';
import Replit from './blocks/replit';
import SoundCloud from './blocks/soundcloud';
import TwitterTweet from './blocks/tweet';
import YouTubeWrapper from './blocks/youtube';
import Gfycat from './blocks/gfycat';

const IS_BROWSER = typeof window === 'object';

export interface ParsedUrl {
  url: string;
  hostname: string;
  pathname: string;
  search: string;
  hash: string;
}

export type EmbedBlockId = string;
export interface BlockProps extends ParsedUrl {
  id: EmbedBlockId;
  width: number;
  isDark: boolean;
  renderVoid: (error?: Error) => React.ReactElement<any> | null;
  renderWrap: ReactEmbedWrapRenderer;
}

export interface Blocks {
  [name: string]: React.ComponentType<BlockProps>;
}

const defaultBlocks: Blocks = {
  figma: Figma,
  gist: Gist,
  gmaps: Gmaps,
  imgur: Imgur,
  instagram: Instagram,
  jsfiddle: JsFiddle,
  simplePlayer: SimplePlayerWrapper,
  reactPlayer: ReactPlayerWrapper,
  replit: Replit,
  soundcloud: SoundCloud,
  tweet: TwitterTweet,
  youtube: YouTubeWrapper,
  gfycat: Gfycat,
};

export type ReactEmbedRouterResult = undefined | [undefined | React.ComponentType<BlockProps>, EmbedBlockId];
export type ReactEmbedRouter = (blocks: Blocks, url: ParsedUrl) => ReactEmbedRouterResult;
export type ReactEmbedRenderer = (
  block: React.ComponentType<BlockProps>,
  id: EmbedBlockId,
  props: ReactEmbedProps,
  state: ReactEmbedState,
) => React.ReactElement<any> | null;
export type ReactEmbedVoidRenderer = (
  props: ReactEmbedProps,
  state: ReactEmbedState,
  error?: Error,
) => React.ReactElement<any> | null;
export type ReactEmbedWrapRenderer = (children: React.ReactElement<any> | null) => React.ReactElement<any> | null;

const renderNull = () => null;
const renderWrap = (children) => children;

export interface ReactEmbedProps {
  /**
   * URL to display.
   */
  url: string;

  /**
   * True if dark mode enable. In that case will try to render content on dark
   * background.
   */
  isDark?: boolean;

  /**
   * Number of pixels the maximum space available to the component. If not provided
   * defaults to window width.
   */
  width?: number;

  blocks?: Blocks;
  router?: ReactEmbedRouter;
  render?: ReactEmbedRenderer;
  fallback?: NonNullable<React.ReactNode> | null;

  /**
   * Called on error or when `react-embed` does not know how render a URL.
   * If called on on error, error will available in `error` argument.
   */
  renderVoid?: ReactEmbedVoidRenderer;
  renderWrap?: ReactEmbedWrapRenderer;
}

export interface ReactEmbedState {
  url?: ParsedUrl;
  error?: Error;
}

export class ReactEmbed extends React.PureComponent<ReactEmbedProps, ReactEmbedState> {
  static defaultProps = {
    width: typeof window === 'object' ? window.innerWidth : 0,
    isDark: false,
    blocks: defaultBlocks,
    router: defaultRouter,
    render: defaultRender,
    renderVoid: renderNull,
    renderWrap,
  };

  static getDerivedStateFromProps(props) {
    if (!IS_BROWSER) return null;

    if (typeof props.url === 'string') {
      try {
        const url = new URL(props.url);
        const {hostname, pathname, search, hash} = url;
        return {
          url: {
            url: props.url,
            hostname,
            pathname,
            search,
            hash,
          },
        };
      } catch (error) {
        return {error};
      }
    } else {
      return undefined;
    }
  }

  static getDerivedStateFromError(error) {
    return {error};
  }

  state: ReactEmbedState = {};

  url: undefined | ParsedUrl;

  render() {
    if (!IS_BROWSER) return null;

    const {props, state} = this;

    if (state.error) return props.renderVoid!(props, state, state.error);

    let result: ReactEmbedRouterResult;
    try {
      result = props.router!(props.blocks!, state.url!);
    } catch (error) {
      // NOTE: This should never happen (hopefully).
      // tslint:disable-next-line no-console
      console.error('Could not route block:', error);
      return props.renderVoid!(props, state, error);
    }

    if (!result || !result[0]) return props.renderVoid!(props, state);

    const [Block, id] = result as any;
    return props.render!(Block, id, props, state);
  }
}

export default ReactEmbed;
