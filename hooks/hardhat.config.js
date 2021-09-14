require("@nomiclabs/hardhat-waffle");

task("test", async (taskArgs, hre, runSuper) => {
  console.log("Before running the tests...")
  // your "pre-test" code here

  const result = await runSuper();

  console.log("After running the tests...")
  // your "post-test" code here

  return result;
});

module.exports = {
  solidity: "0.8.4",
};
