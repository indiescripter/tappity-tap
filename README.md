# tappity-tap

> A TypeScript-batteries-included drop-in wrapper for NPM
*[tap](https://www.npmjs.com/package/tap)* testing package by
*[isaacs](https://www.npmjs.com/~isaacs)*.

*tappity-tap* is self-contained bundle consisting of *tap* together with
*TypeScript typings*.

Accordingly you can develop your tests in *TypeScript* or *JavaScript* with
optional type annotations in JSDoc comments.

This allows you to reap the benefit of type-aware editing afforded by editors
like VSCode and others.

_For documentation about using tap itself please head over to the official
[NODE TAP website](http://www.node-tap.org/)._

## Installing

```
  npm install --save-dev tappity-tap
```

Or if you prefer to keep abreast with the most recent version, modify your
`package.json` to include *tappity-tap* as a devDependency like this ...

```
  "devDependencies": {
    "tappity-tap": "latest",
  }
```

## Running tests

Same as per [tap](https://www.npmjs.com/package/tap). For example, in your
`package.json`:

```
  "scripts": {
    "test": "tap tests/**/*.js"
  },
```
