
# Three.js bundled with OrbitControls

Vanilla [Three.js](https://github.com/mrdoob/three.js) including basic controls. If that is all you need, you can link directly to this build in your web pages:

`<script src="https://cdn.jsdelivr.net/gh/paulmasson/threejs-with-controls@r121/build/three.min.js"></script>`

The steps to create this build from a [stable](https://github.com/mrdoob/three.js/issues/20591) tagged version are

* Edit the version number of `three` in `package.json` to indicate the desired version. These numbers are of the form `0.nnn.n`, where the last digit reflects possible modifications after the first release. Available versions can be displayed with `npm show three versions`.

* Configure the library with `npm install`.

* Build the library with `npm run build`.

The minified file will be located in the `build` directory.

If you need additional features, then simply add the appropriate `export` lines to `Three.js` and build the library yourself.

Live examples using this build via [MathCell](https://github.com/paulmasson/mathcell):

[Bourke Harmonics](https://paulmasson.github.io/mathcell/docs/examples/bourke-harmonics.html)<br>
[Cardinal Sine Function](https://paulmasson.github.io/mathcell/docs/examples/cardinal-sine-3d.html)<br>
[Hyperbolic Helicoid](https://paulmasson.github.io/mathcell/docs/examples/hyperbolic-helicoid.html)<br>
[Schwarz Primitive Surface](https://paulmasson.github.io/mathcell/docs/examples/schwarz-primitive-surface.html)<br>
[Umbilic Torus](https://paulmasson.github.io/mathcell/docs/examples/umbilic-torus.html)


