import * as React from 'react';
import { ILayoutState } from './ILayoutState';
import { ILayoutProps } from './ILayoutProps';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  public render() {
    return (
      <div>
        Layout Component
      </div>
    );
  }
}

export default Layout;