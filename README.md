# sfdc-specified-test

Salesforce specified test generation
Based on the package xml or repository

## Getting Started

Works in Unix like system.
Windows is not tested.

### Installing

```
npm install -g sfdc-specified-test
```

or

```
yarn globally add sfdc-specified-test
```

## Usage

### Command Line

```
$ sst -h

  Usage: sst [options]

  Salesforce specified test generation

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -d, --dir                    salesforce src directory path [./src]
    -s, --suffix                 test class suffix pattern [_TEST]
```

### Module

```
  var sst = require('sfdc-specified-test');

  sst({
    'src':'.', // salesforce src directory path : ./src
    'suffix': '_TEST', // test class suffix pattern : _TEST
  }, console.log);
```


## Built With

* [commander](https://github.com/tj/commander.js/) - The complete solution for node.js command-line interfaces, inspired by Ruby's commander.
* [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML to JavaScript object converter.

## Versioning

[SemVer](http://semver.org/) is used for versioning.

## Authors

* **Sebastien Colladon** - *Initial work* - [scolladon](https://github.com/scolladon)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
