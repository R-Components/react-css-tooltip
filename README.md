# react-css-tooltip

> css tooltip


## DEMO

## Install

```bash
npm install --save react-css-tooltip
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactCssTooltip from 'react-css-tooltip'
import 'react-css-tooltip/dist/index.css';

class Example extends Component {
  render () {
    return (
      <ReactCssTooltip placement="top" text="wxbtop">test</ReactCssTooltip>
    )
  }
}
```

非 react 应用也可以直接引用 css 文件，给对应的 dom元素添加class `tooltip top` 这种方式来实现效果。

## License

MIT © [Go7hic](https://github.com/Go7hic)
