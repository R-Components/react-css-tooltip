import React, { ChangeEvent, ElementType } from 'react';

import './index.less';

interface IProps {
  placement: string;
  text: string;
  style?: object;
}

export default class ReactCssTooltip extends React.Component<IProps> {
  public render() {
    const { placement, text, children, style } = this.props;

    return (
      <a className={`tooltip ${placement}`} style={style} aria-label={text}>
        {children}
      </a>
    );
  }
}
