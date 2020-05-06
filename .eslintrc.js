module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    /**
     * 运行环境
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 不需要
     */
    indent: 0,
    quotes: 0, // 不区分单双引号
    'key-spacing': 0, // 冒号前不用放空格
    semi: 0,
    eqeqeq: 0, // 必须使用全等
    'arrow-parens': 0, // 箭头函数有参数时不用加圆括号
    'space-before-function-paren': 0, // 函数前面不需要空格
    'one-var': 0, // 允许var实现多个变量
    /**
     * 警告
     */
    'no-extra-boolean-cast': 1, // 不必要的bool转换
    'no-extra-parens': 1, // 非必要的括号
    'no-empty': 1, // 块语句中的内容不能为空
    'no-use-before-define': [1, 'nofunc'], // 未定义前不能使用
    complexity: [1, 10], // 循环复杂度
    'no-unused-vars': 1 // 不能有声明后未被使用的变量或参数
  }
}
