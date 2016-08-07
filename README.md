Android Versions
================

A node module to get Android versions by API level, NDK level, semantic version, or version name.

Versions are referenced from [source.android.com/source/build-numbers.html](https://source.android.com/source/build-numbers.html#platform-code-names-versions-api-levels-and-ndk-releases). The version for "Current Development Build" (`"CUR_DEVELOPMENT"`) is not included in the list of `VERSIONS`.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/android-version.svg?style=flat-square
[npm-url]: https://npmjs.org/package/android-version
[travis-image]: https://img.shields.io/travis/dvoiss/android-version.svg?style=flat-square
[travis-url]: https://travis-ci.org/dvoiss/android-version

## Install

```bash
npm install android-versions --save
```

## Usage

View the tests for more advanced usage.

```javascript
// Get by API level:
const android = require('android-versions')
console.log(android.get(23))
// => { api: 23, ndk: 8, semver: "6.0", name: "Marshmallow", versionCode: "M" }

// Get *all* by predicate:
android.getAll((version) => {
  return version.ndk > 5 && version.api < 15
}).map((version) => version.versionCode)
// => ["HONEYCOMB_MR1", "HONEYCOMB_MR2", "ICE_CREAM_SANDWICH"]

// Access a specific version with all info:
android.LOLLIPOP
// => { api: 21, ndk: 8, semver: "5.0", name: "Lollipop", versionCode: "LOLLIPOP" }

// Access the complete reference of Android versions with all info:
android.VERSIONS
// => {
//   BASE:                   { api: 1,  ndk: 0, semver: "1.0", name: "(no code name)", versionCode: "BASE" },
//   ...
//   CUPCAKE:                { api: 3,  ndk: 1, semver: "1.5", name: "Cupcake",        versionCode: "CUPCAKE" },
//   ...
//   N:                      { api: 24, ndk: 8, semver: "7.0", name: "Nougat",         versionCode: "N" }
// }
```

## Test

```bash
npm run test
```

## License

MIT