const hre = require("hardhat");

async function main() {
  const Foo = await hre.ethers.getContractFactory("Foo");
  const foo = await Foo.deploy();

  const tx = await foo.inc()

  const trace = await network.provider.send("debug_traceTransaction", [tx.hash])

  const [x, isEven] = ethers.utils.defaultAbiCoder.decode(
    ['uint', 'bool'],
    `0x${trace.returnValue}`
  )
  console.log(`x: ${x}, isEven: ${isEven}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
