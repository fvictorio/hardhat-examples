require("@nomiclabs/hardhat-waffle");
const taskNames = require("hardhat/builtin-tasks/task-names");

/**
 * `address` and `port` have the address and port of the running node
 * `provider` is the same that you get in a task/script under `hre.network.provider`
 * `server` is the JsonRpcServer instance
 */
subtask(taskNames.TASK_NODE_SERVER_READY, async ({ address, port, provider, server }, hre, runSuper) => {
  // This is necessary to show the initial message and list of accounts,
  // but it can be safely removed
  await runSuper();

  // Mine an empty block right after starting the node
  await provider.send("evm_mine");
});

module.exports = {
  solidity: "0.7.3"
};
