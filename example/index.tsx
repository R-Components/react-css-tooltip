import React from 'react';
import ReactDom from 'react-dom';
import ReactCssTooltip from '../src';

class App extends React.Component<any> {
  public render() {
    return (
      <div style={{ margin: '100px' }}>
        <ReactCssTooltip style={{ marginRight: '10px' }} placement="top" text="tooltip top">
          测试
        </ReactCssTooltip>
        <ReactCssTooltip style={{ marginRight: '10px' }} placement="left" text="tooltip top">
          测试
        </ReactCssTooltip>
        <ReactCssTooltip style={{ marginRight: '10px' }} placement="bottom" text="tooltip top">
          测试
        </ReactCssTooltip>
        <ReactCssTooltip style={{ marginRight: '10px' }} placement="right" text="tooltip top">
          测试
        </ReactCssTooltip>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
