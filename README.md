<div align="center">

# semantic-release-config-aristek

</div>

[Semantic release](https://github.com/semantic-release/semantic-release) config for version management and package publishing.
It uses our own preset based on [conventional commits](https://www.conventionalcommits.org).

## Features

- Using [npm](https://github.com/semantic-release/npm) and [git](https://github.com/semantic-release/git) plugins
  to write version to `package.json` and publish to npm registry.
- Using [github](https://github.com/semantic-release/github) plugin
  to publish a [GitHub release](https://help.github.com/en/github/administering-a-repository/about-releases).
- Release for `feat`, `fix`, `perf` and `build` commit types.

## Installation

To add package to project's dependencies via npm run:

```bash
npm i -E -D semantic-release-config-aristek semantic-release@17.0.x
```

Or via yarn:

```bash
yarn add -E -D semantic-release-config-aristek semantic-release@17.0.4
```

## Usage

Add this lines to your `package.json` file:

```json
"release": {
  "extends": "semantic-release-config-aristek"
}
```
