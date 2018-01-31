## Quick Start Guide

### Perequisities:

Install Node min. version 8.9. Recommended using nvm.

Install dependencies:

```
npm i
```

### Run tests:

Run:

```
npm test
```

### Debug tests:

Run:

```
npm run test:debug
```

Then attach to node debug process on port 51412.

### Running other codeceptjs commands:

I did not want codeceptjs as global dependency, so I installed it as local and added an NPM script to be able to run codeceptjs commands.

Here is a shortcut to running the command:

```
npm run cjs [command_name]
```

Examples:

```
npm run cjs # lists all command options
npm run cjs shell # starts interactive shell
npm run cjs generate:test signup # generates new test named signup
npm run cjs gt signup # generates new test named signup (shortcut)
npm run cjs list # lists all available test actions
```