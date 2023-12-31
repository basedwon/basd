# basd

> based code lifts all ships

[![npm](https://img.shields.io/npm/v/basd?style=flat&logo=npm)](https://www.npmjs.com/package/basd)
[![pipeline](https://gitlab.com/basedwon/basd/badges/master/pipeline.svg)](https://gitlab.com/basedwon/basd/-/pipelines)
[![license](https://img.shields.io/npm/l/basd)](https://gitlab.com/basedwon/basd/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/basd)](https://www.npmjs.com/package/basd) 

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/basedwon/basd)
[![Github](https://img.shields.io/badge/Github%20-%20?logo=github&color=%23383a40)](https://github.com/basedwon/basd)
[![Twitter](https://img.shields.io/badge/@basdwon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

`basd` is a comprehensive suite of utility functions and helper libraries that augment lodash and add much herbs and spices. A solid foundation on which to build robust and complex JS applications. At the heart of `basd` is the `@basd/base` module, containing many extensions to lodash. `@basd/pipe` deals with readable and writable streams and `@basd/logger` is an isomorphic logger for all of your logging needs. basd itself acts as a facade to all of these submodules as well as integrating various common and stable packages such as msgpack and tweetnacl.

## Installation

```bash
npm install basd
```

## Usage

Import `basd` into your project and use it like lodash:

```js
const _ = require('basd')
// or
const { _, log, uuid, ...etc } = require('basd')
```

Then, use any of the plethora of methods:

```js
_.log('Hello, World!')
```

## Documentation

- [API Reference](/docs/api.md)

## Modules

- [@basd/base](https://gitlab.com/frenware/core/basd/base) imports lodash and adds various utility and helper functions

- [@basd/pipe](https://gitlab.com/frenware/core/basd/pipe) provides pipe and stream functionality

- [@basd/logger](https://gitlab.com/frenware/core/basd/logger) is a simple logging tool, configurable to your needs

For specific submodule usage, refer to the individual module's documentation.

## Tests

In order to run the test suite, simply clone the repository and install its dependencies:

```bash
git clone https://gitlab.com/basedwon/basd.git
cd basd
npm install
```

To run the tests:

```bash
npm test
```

## Contributing

Thank you! Please see our [contributing guidelines](/docs/contributing.md) for details.

## Donations

If you find this project useful and want to help support further development, please send us some coin. We greatly appreciate any and all contributions. Thank you!

**Bitcoin (BTC):**
```
1JUb1yNFH6wjGekRUW6Dfgyg4J4h6wKKdF
```

**Monero (XMR):**
```
46uV2fMZT3EWkBrGUgszJCcbqFqEvqrB4bZBJwsbx7yA8e2WBakXzJSUK8aqT4GoqERzbg4oKT2SiPeCgjzVH6VpSQ5y7KQ
```

## License

basd is [MIT licensed](https://gitlab.com/basedwon/basd/-/blob/master/LICENSE).

