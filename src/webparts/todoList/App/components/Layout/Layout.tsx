import * as React from 'react';
import { ILayoutState } from './ILayoutState';
import { ILayoutProps } from './ILayoutProps';
import Todo from '../Todo/Todo';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  public render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default Layout;