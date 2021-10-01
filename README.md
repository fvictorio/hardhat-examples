# Hardhat examples

This repository contains examples showing how to do certain things in [Hardhat](http://hardhat.org/). If you want to
see something else included, feel free to [open an issue](https://github.com/fvictorio/hardhat-examples/issues/new).

## Parallel tests

You can run your Hardhat [tests in parallel](/parallel-tests). All you have to do is to install `mocha` and change the
command you use to run them. Check the example to learn more.

## Wait until the node is started

When you run `hh node`, a JSON-RPC server is started that you can use via http (and
using `--network localhost`). Sometimes you want to wait until the node is ready to
do something. You can accomplish this with the `TASK_NODE_SERVER_READY` subtask.
See [the example](/wait-until-node-ready) to learn more.

## Customize generated artifacts

[This example](/customize-artifacts) shows how to customize the artifacts emitted by Hardhat.

## Use a custom version of solc

If you want to use a custom solc version (for example, a modified solc or a nightly version), check [this
example](/custom-solc).

## Reading events

[This example](/reading-events) shows how to use waffle to test the events emitted by a contract.
It also includes a script for getting the emitted events from a transaction.

## Tasks hooks

[This example](/hooks) shows how to run some code before and/or after a task is executed.

## Read returned value from tx

[This example](/getting-tx-return-value) shows how to get the return value from a mined transaction.
