let failOnWarnings = false;

function extractWarnings(output) {
  return output.errors.filter((x) => x.severity === "warning");
}

subtask("compile:solidity:check-errors")
  .setAction(async ({ output }, _hre, runSuper) => {
    await runSuper();

    if (failOnWarnings) {
      const warnings = extractWarnings(output);
      if (warnings.length > 0) {
        throw new Error(`Compilation produced ${warnings.length} warnings`);
      }
    }
  });

task("compile")
  .addFlag("failOnWarnings", "Fail if solc produces warnings")
  .setAction(async (taskParams, _hre, runSuper) => {
    failOnWarnings = taskParams.failOnWarnings;
    await runSuper();
  });

module.exports = {
  solidity: "0.8.5",
};
