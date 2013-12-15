karma-intro [![Build Status](https://travis-ci.org/ama-ch/karma-intro.png?branch=master)](https://travis-ci.org/ama-ch/karma-intro) [![Dependency Status](https://david-dm.org/ama-ch/karma-intro.png)](https://david-dm.org/ama-ch/karma-intro) [![Coverage Status](https://coveralls.io/repos/ama-ch/karma-intro/badge.png)](https://coveralls.io/r/ama-ch/karma-intro?branch=coveralls-setting)
===========

Karma sample project.  
Using Mocha and expect.js, Grunt. Continuous Integration with [Travis CI](https://travis-ci.org/) and [Coveralls](https://coveralls.io/).

## Test framework

[Mocha](http://visionmedia.github.io/mocha/) and [expect.js](https://github.com/LearnBoost/expect.js/).

## Running tests

For TDD:

```bash
$ grunt karma:dev
```

For CI:

```bash
$ grunt karma:ci
```

For Coverage:

```bash
$ grunt coverage
```

This command is alias to `grunt karma:coverage coveralls`.  
`grunt karma:coverage` generates coverage reports and `grunt coveralls` posts to Coveralls.
