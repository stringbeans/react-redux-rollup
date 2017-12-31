# react-redux-rollup
Experimenting with react/redux and using rollup as the builder/bundler

## NOTES
Currently there is an issue with `apollo-link` and `zen-observable` that is preventing rollup from properly building the bundle. For now, the workaround is to do the following:

* edit `node_modules/apollo-link/lib/index.js` and change the import to `import Observable from 'zen-observable'`
* edit `node_modules/apollo-link/lib/link.js` and change the import to `import Observable from 'zen-observable'`
