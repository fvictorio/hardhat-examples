# Customize generated artifacts

Hardhat uses the compilation output to generate an artifact for each contract. By default this artifact has things like the contract name the ABI, the bytecode, and so on.

You can customize the output by overriding a subtask. Check the `hardhat.config.js` file to see how to do this. Notice that you might need to configure the `outputSelection` of the compiler. Check [this](https://docs.soliditylang.org/en/v0.8.0/using-the-compiler.html#compiler-input-and-output-json-description) to learn more.

Run `hh compile --force` and check `./artifacts/contracts/Example.sol/Example.json` to see the generated artifact.
