import * as React from 'react';
import {BlockProps} from '../../ReactEmbed';
export interface GistProps extends BlockProps {
  file?: string;
}
declare class Gist extends React.PureComponent<GistProps> {
  iframeNode: HTMLIFrameElement | null;
  id: string;
  componentDidMount(): void;
  componentDidUpdate(prevProps: any, prevState: any): void;
  _defineUrl(): string;
  _updateIframeContent(): void;
  render(): React.ReactElement<
    any,
    | string
    | ((
        props: any,
      ) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null)
    | (new (props: any) => React.Component<any, any, any>)
  > | null;
}
export default Gist;
