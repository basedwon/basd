# basd

> Based code don't write itself

[![npm](https://img.shields.io/npm/v/basd?style=flat&logo=npm)](https://www.npmjs.com/package/basd)
[![pipeline](https://gitlab.com/basedwon/basd/badges/master/pipeline.svg)](https://gitlab.com/basedwon/basd/-/pipelines)
[![license](https://img.shields.io/npm/l/basd)](https://gitlab.com/basedwon/basd/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/basd)](https://www.npmjs.com/package/basd) 

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/basedwon/basd)
[![Github](https://img.shields.io/badge/Github%20-%20?logo=github&color=%23383a40)](https://github.com/basedwon/basd)
[![Twitter](https://img.shields.io/badge/@basdwon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

A foundational JavaScript library that extends lodash with various custom utility methods, providing a base for building complex applications. This library also provides additional modules, `@basd/pipe`, `@basd/logger`, and core `@basd/base`, each offering unique functionalities to your projects.

## Modules

### @basd/base
The heart of this library. `@basd/base` imports lodash and adds various utility and helper functions. Some of the key functionalities include:

- `_.encode` & `_.decode`: Encoding and decoding methods, primarily using base58.
- `_.executor`: Method that assists with execution time tracking.
- `_.sortChars`: Method for sorting characters in a string or JSON stringified object.
- And more: Check the source code for more utility methods.

### @basd/logger
An effective logging tool, configurable to your needs.

### @basd/pipe
A module that provides pipe and stream functionality.

## Installation

```bash
npm install basd
```

## Usage

Import `basd` into your project and use it like lodash:

```javascript
const _ = require('basd')
// or
const { _, log, uuid } = require('basd')
```

Then, use any method just like you would use lodash:

```javascript
_.log('Hello, World!')
```

For specific submodule usage, refer to the individual module's documentation.

## Contributing
We welcome contributions! Please see our contributing guidelines for details.

## License
This project is licensed under [MIT](https://opensource.org/licenses/MIT).






## Donations

If you find this project useful and would like to support our work, consider making a donation. Your contribution helps us continue improving this project and creating new ones. Every little bit counts!

Here are our wallet addresses:

**Bitcoin (BTC):**
```
1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
```

**Monero (XMR):**
```
4AgoP6wU6p4xZyq9CoJZa3T2FJbgU4dHii5EJDMzvbaNQmsUvVNwZaJbeGUTkiQJfz6hmEKwGQXW8v9RjSxXp6EFLa5XU
```

Please, scan the following QR codes if you prefer mobile wallets:

![Bitcoin QR](https://example.com/bitcoin-qr.png) ![Monero QR](https://example.com/monero-qr.png)

We sincerely appreciate your generosity!







## Support

If you find this project useful and want to show some love, you can support it by donating:

**Bitcoin:** `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`

**Monero:** `49N4oGjk7RCHStek8i6C6c6mAJpegP9CJuiSJhonWEJHoAx4ypSw7oY6yZ8yCFuVjD9S3x2PPeyhCV4VZKXCgkfZ938tyqL`

Your donations are greatly appreciated and help support the continued development of this project.












## Support

If you found this project helpful and want to show some love, you can buy me a coffee (or more likely a piece of hardware) with a donation:

**Bitcoin**: `3P3QsMVK89JBNqZQv5zMAKG8FK3kJM4rjt`

**Monero**: `43hhubS27LkaXMHfoHaSKt9gPSPqeZh9gTes2yKvv2usZJJ6SQ4nVas2CdPvP1JnZeSsXC37LJzZvG13M3b8HgN9P7yjddv`

Please note that these addresses are for donations only. 
























## Documentation

- [Basic Usage](/docs/basic-usage.md)
- [Advanced Usage](/docs/advanced-usage.md)
- [API Reference](/docs/api.md)
- [Class Diagram](/docs/class-diagram.md)

<img src="/docs/class-diagram.png" alt="Picobuf class diagram" height="260" />

## Tests

In order to run the test suite, simply clone the repository and install its dependencies:

```bash
git clone https://gitlab.com/basedwon/picobuf.git
cd picobuf
npm install
```

To run the tests:

```bash
npm test
```

Testing in the browser: *coming soon...*

## Contributing

Thank you! Please see our [contributing guidelines](/docs/contributing.md) for details.

## License

Picobuf is [MIT licensed](https://gitlab.com/basedwon/picobuf/-/blob/master/LICENSE).






















# basd

`basd` is a foundational JavaScript library that underpins various other projects. It is a collection of utilities and helper functions accumulated over years of development. The library is designed to be extensible and modular, using git submodules for different components.

## Key Submodules
- `@basd/base`: This module is the heart of the library, offering a variety of utility and helper functions.
- `@basd/pipe`: A pipe mechanism for data streaming.
- `@basd/logger`: A logging mechanism that can be integrated throughout your projects.

## Installation

You can install this library through npm:

```bash
npm install basd
```

## Usage

Import the `basd` library into your JavaScript file:

```javascript
const _ = require('basd');
```

Then, you can use the utilities and functions provided. For example, to use the `mkdir` function:

```javascript
_.mkdir('new_directory');
```

## Documentation

Full documentation for each submodule and function can be found in their respective README files. However, here's a quick overview of some core functions provided by `@basd/base`:

- `_.isNumeric(num)`: Returns true if the given argument is numeric.
- `_.toNumber(num, deci)`: Converts the given argument into a number with the provided decimal places.
- `_.isDate(date)`: Returns true if the given argument is a date.
- `_.isBool(bool)`: Returns true if the given argument is boolean.
- `_.isUrl(url)`: Returns true if the given argument is a valid URL.

## Testing

Unit tests are provided for the various components of this library. These tests use the `describe`/`it` functions and the `expect` function from chai.

To run all tests:

```bash
npm test
```

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

