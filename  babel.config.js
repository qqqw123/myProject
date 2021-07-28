module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          const name1 = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name1}.scss`
        }
      }
    ],
    ['transform-es2015-modules-commonjs']
  ]
}
