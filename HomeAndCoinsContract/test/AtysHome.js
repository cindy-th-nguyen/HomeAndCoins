const { expect } = require("chai");

let AtysContract;
let provider;
let ownerAdress;

beforeEach(async function () {
    const [ownerAdress] = await ethers.getSigners();

    AtysContract = await ethers.getContractFactory("AtysHome");

    const hardhatAtysHome = await AtysContract.deploy();

    provider = await hardhatAtysHome.connect(ownerAdress);
});

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {

        const announcements = await provider.functions.getAnnouncements.call();
        console.log(announcements);

        expect(announcements[0].title).equal(undefined);
    });
});