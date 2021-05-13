# Using a custom solc

To use a custom solc you need to override the `TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD` subtask.
This subtask returns an object with four properties:

- `compilerPath`: the path to the compiler
- `isSolcJs`: a flag indicating if the compiler is a javascript module or a native binary
- `version`: the short version of the compiler (for example, `0.8.5`)
- `longVersion`: the long version of the compiler (for example, `0.8.5-nightly.2021.5.12+commit.98e2b4e5`). This property is used as extra metadata in the
  build-info files, so you shouldn't worry too much about its value.

See [`hardhat.config.js`](/hardhat.config.js) to see how it's done.
