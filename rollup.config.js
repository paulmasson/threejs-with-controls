import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {

  input: 'Three.js',

  output: {
    file: 'build/three.min.js',
    format: 'umd',
    name: 'THREE'
  },

  plugins: [ nodeResolve(), terser() ]

}
