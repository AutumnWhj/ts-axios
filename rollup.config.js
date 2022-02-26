import typescript from '@rollup/plugin-typescript' // 让 rollup 认识 ts 的代码
import pkg from './package.json'

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from '@rollup/plugin-node-resolve'
// import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import externals from 'rollup-plugin-node-externals'

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._VERSION_ = '${pkg.version}'
}`

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      footer
    },
    {
      file: pkg.module,
      format: 'esm',
      footer
    }
  ],
  external: ['path'],
  plugins: [externals(), typescript(), commonjs(), resolve(), json()]
}
