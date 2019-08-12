import { createGlobalStyle } from 'styled-components'
export const GlobalStyleIcon = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1565158184894'); /* IE9 */
  src: url('./iconfont.eot?t=1565158184894#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1565158184894') format('woff'),
  url('./iconfont.ttf?t=1565158184894') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1565158184894#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


