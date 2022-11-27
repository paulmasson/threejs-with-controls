
# Three.js bundled with OrbitControls

Vanilla [Three.js](https://github.com/mrdoob/three.js) including basic controls. If that is all you need, you can link directly to this build in your web pages:

`<script src="https://cdn.jsdelivr.net/gh/paulmasson/threejs-with-controls@r121/build/three.min.js"></script>`

The steps to create this build from a [stable](https://github.com/mrdoob/three.js/issues/20591) tagged version are

* Perform a shallow clone of the desired version with

`git clone --depth=1 --branch r<n> --single-branch https://github.com/mrdoob/three.js.git`

* Add a single line to `src/Three.js` just after all other exports

`export { OrbitControls } from '../examples/jsm/controls/OrbitControls.js';`

* Revert the import `from 'three';` in `OrbitControls.js` to

`from '../../../build/three.module.js';`

* Move into the library directory with `cd three.js`

* Configure the library with `npm install`

* Build the library with `npm run build`

The minified file will be located in the `build` directory and has been copied to the same directory here.

If you need additional features, then simply add the appropriate `export` lines to `src/Three.js` and build the library yourself.

Live examples using this build via [MathCell](https://github.com/paulmasson/mathcell):

[Bourke Harmonics](https://paulmasson.github.io/mathcell/docs/examples/bourke-harmonics.html)<br>
[Cardinal Sine Function](https://paulmasson.github.io/mathcell/docs/examples/cardinal-sine-3d.html)<br>
[Hyperbolic Helicoid](https://paulmasson.github.io/mathcell/docs/examples/hyperbolic-helicoid.html)<br>
[Schwarz Primitive Surface](https://paulmasson.github.io/mathcell/docs/examples/schwarz-primitive-surface.html)<br>
[Umbilic Torus](https://paulmasson.github.io/mathcell/docs/examples/umbilic-torus.html)


