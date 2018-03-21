import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/react-aria-modal.js',
    output: {
      file: 'dist/react-aria-modal.js',
	  format: 'umd',
	  name: 'react-aria-modal',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    external: ['react', 'react-dom'],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs()
    ]
  }
]
