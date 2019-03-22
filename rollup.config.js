import del from 'rollup-plugin-delete'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

const IS_PROD = process.env.NODE_ENV === 'production'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/dom-utils.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: './dist/dom-utils.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: './dist/dom-utils.umd.js',
      format: 'umd',
      name: 'DOMUtils',
      sourcemap: true
    }
  ],
  plugins: [del({ targets: 'dist/*' }), filesize(), IS_PROD && terser()],

  watch: {
    include: 'src/**'
  }
}
