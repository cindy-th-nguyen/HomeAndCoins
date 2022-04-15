const { expect } = require("chai");

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();

        const AtysContract = await ethers.getContractFactory("AtysHome");
        console.log("oyyeeeeee")

        const hardhatAtysHome = await AtysContract.deploy();

        const provider = await hardhatAtysHome.connect(owner);
        console.log(provider);
        const announcements = await provider.functions.getAnnouncements.call();
        console.log(announcements);
    });
});