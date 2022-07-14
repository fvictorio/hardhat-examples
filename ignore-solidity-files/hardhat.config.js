const { TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS } = require("hardhat/builtin-tasks/task-names");
const path = require("path");

// subtask(
//   TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
//   async (_, { config }, runSuper) => {
//     const paths = await runSuper();
//
//     return paths
//       .filter(solidityFilePath => {
//         const relativePath = path.relative(config.paths.sources, solidityFilePath)
//
//         return relativePath !== "Bar.sol";
//       })
//   }
// );

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
