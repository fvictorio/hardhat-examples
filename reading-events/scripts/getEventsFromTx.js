async function main() {
  const EventEmitter = await ethers.getContractFactory("EventEmitter");
  const eventEmitter = await EventEmitter.deploy();
  await eventEmitter.deployed();

  const tx = await eventEmitter.emitBothEvents(42, "foo");

  const receipt = await tx.wait()

  for (const event of receipt.events) {
    console.log(`Event ${event.event} with args ${event.args}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
