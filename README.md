karma-intro [![Build Status](https://travis-ci.org/brownman/karma-intro.png?branch=master)](https://travis-ci.org/brownman/karma-intro)
===========

Example of Karma workflow with [Travis CI](https://travis-ci.org/) and [Coveralls](https://coveralls.io/).

## Test framework

[Mocha](http://visionmedia.github.io/mocha/) and [expect.js](https://github.com/LearnBoost/expect.js/).

## Installation

```bash
$ npm install -g grunt-cli
$ git clone https://github.com/ama-ch/karma-intro.git
$ cd karma-intro
$ npm install
```

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
