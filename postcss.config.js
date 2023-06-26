module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    autoprefixer: {},
    'postcss-write-svg': { utf8: false },
    cssnano: {
      'cssnano-preset-advanced': {
        autoprefixer: false, // cssnext也具备autoprefixer功能，所以把cssnano的设置为false
        zindex: false, // 避免 cssnano 重新计算 z-index
      },
    },
    /* 'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750, vant 使用的是 375
      viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334
      unitPrecision: 2, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: true, // 允许在媒体查询中转换`px`
    }, */
  },
}
