
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

If you just need controls in addition to the main library, you can link directly to this build in your web pages:

`<script src="https://cdn.jsdelivr.net/gh/paulmasson/threejs-with-controls@r121/build/three.min.js"></script>`

If you need additional features, then simply add the appropriate `export` lines to `src/Three.js` and build the library yourself.

Live examples using this build via [MathCell](https://github.com/paulmasson/mathcell):

[Bourke Harmonics](https://paulmasson.github.io/mathcell/docs/examples/bourke-harmonics.html)<br>
[Cardinal Sine Function](https://paulmasson.github.io/mathcell/docs/examples/cardinal-sine-3d.html)<br>
[Hyperbolic Helicoid](https://paulmasson.github.io/mathcell/docs/examples/hyperbolic-helicoid.html)<br>
[Schwarz Primitive Surface](https://paulmasson.github.io/mathcell/docs/examples/schwarz-primitive-surface.html)<br>
[Umbilic Torus](https://paulmasson.github.io/mathcell/docs/examples/umbilic-torus.html)


