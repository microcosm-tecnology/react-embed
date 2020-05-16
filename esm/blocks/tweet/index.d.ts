import * as React from 'react';
import {BlockProps} from '../../ReactEmbed';
declare class TwitterTweet extends React.PureComponent<BlockProps, {}> {
  mounted: boolean;
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): React.ReactElement<
    any,
    | string
    | ((
        props: any,
      ) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null)
    | (new (props: any) => React.Component<any, any, any>)
  > | null;
}
export default TwitterTweet;
