# Ignore Solidity files during compilation

This example shows how to ignore one or more files during compilation.

If you run `npx hardhat compile` in this project, you'll get an error because `Bar.sol` has a syntax error. If for any reason you want to ignore that file temporarily, you can override the `TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS` subtask. Go to the `hardhat.config.js` file and uncomment the code that does this to see how that can be done.

Since a Hardhat config is just code, you can take any approach you want to do this. For example, you could add a new entry in `config.paths`, like `whitelist`, to specify the subset of files you want to compile, and then use `config.paths.whitelist` in the overriden task to include only those files.
