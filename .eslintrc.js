module.exports = {
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:vue/base"
  ],
  rules: {
    "no-console": 1,
    "no-debugger": 1,
    semi: [1,'never']
  }
}