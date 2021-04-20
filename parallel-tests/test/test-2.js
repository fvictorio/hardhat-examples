const { expect } = require("chai");

describe("Test 2", function() {
  it("test", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await new Promise(res => setTimeout(res, 5000))
  });
});
