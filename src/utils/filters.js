export default [
  {
    name: 'bankCardFormat',
    fn: (params) => {
      let code = params.toString()
      let length = params.length
      let arr = []
      while (code.length) {
        arr.push(code.slice(0, 4))
        arr.push(' ')
        code = code.slice(4, length)
      }
      return arr.join('')
    }
  }
]