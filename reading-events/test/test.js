const { expect } = require("chai");

describe("EventEmitter", function () {
  it("Should emit MyEvent", async function () {
    const EventEmitter = await ethers.getContractFactory("EventEmitter");
    const eventEmitter = await EventEmitter.deploy();
    await eventEmitter.deployed();

    await expect(eventEmitter.emitMyEvent()).to.emit(eventEmitter, "MyEvent");
  });

  it("Should emit MyEventWithData", async function () {
    const EventEmitter = await ethers.getContractFactory("EventEmitter");
    const eventEmitter = await EventEmitter.deploy();
    await eventEmitter.deployed();

    await expect(eventEmitter.emitMyEventWithData(42, "foo"))
      .to.emit(eventEmitter, "MyEventWithData")
      .withArgs(42, "foo");
  });

  it("Should emit both events", async function () {
    const EventEmitter = await ethers.getContractFactory("EventEmitter");
    const eventEmitter = await EventEmitter.deploy();
    await eventEmitter.deployed();

    await expect(eventEmitter.emitBothEvents(42, "foo"))
      .to.emit(eventEmitter, "MyEventWithData")
      .withArgs(42, "foo")
      .and.to.emit(eventEmitter, "MyEvent");
  });

  it("Should emit event in the constructor", async function () {
    const EventEmitter = await ethers.getContractFactory("EventEmitter");
    const eventEmitter = await EventEmitter.deploy();
    await eventEmitter.deployed();

    await expect(eventEmitter.deployTransaction).to.emit(eventEmitter, "ConstructorEvent");
  });
});
