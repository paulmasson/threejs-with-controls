
# Three.js bundled with OrbitControls

The steps to create this build from a new release are

* Perform a shallow clone of just the `master` branch with

`git clone --depth=1 --branch master --single-branch https://github.com/mrdoob/three.js.git`

* Add a single line to `src/Three.js` just after all other exports

`export { OrbitControls } from '../examples/jsm/controls/OrbitControls.js';`

* Move into the library directory with `cd three.js`

* Configure the library with `npm install`

* Build the library with `npm run build`

The minified file will be located in the `build` directory and has been copied to the same directory here.