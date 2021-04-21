# Parallel tests in Hardhat

This repository shows how to run your tests in parallel when using hardhat.

There are two test files in this project. Both do the same thing: deploy a contract, check something, and wait 5
seconds. If you run `yarn test`, the whole run should take at least 10 seconds, but if you run `yarn test:parallel` it
will take 5 seconds.

To add parallel tests to your project, you just need to do two things:

1. Install mocha: `yarn add --dev mocha`
2. Run `npx mocha --require hardhat/register --recursive --parallel --exit`

You can add this as a npm script in your `package.json` (see the `test:parallel` script in this example).

## Typescript

To do this with typescript, just use that same command but add `--extension ts` to the `mocha` command.

## Acknowledgements

This idea was born out of the infinite insistence of [@nventuro](https://github.com/nventuro). So, thanks Nico!
