const { expect } = require("chai");

describe("AtysHome contract", function () {
    let AtysContract;
    let provider;
    let ownerAdress;
    let addresse1;

    beforeEach(async function () {
        [ownerAdress, addresse1] = await ethers.getSigners();

        AtysContract = await ethers.getContractFactory("AtysHome");

        const hardhatAtysHome = await AtysContract.deploy();

        provider = await hardhatAtysHome.connect(ownerAdress);
    });

    describe("Annoucements", function () {
        it("Announcements should be empty on init", async function () {

            const response = await provider.functions.getAnnouncements.call();
            console.log(response);
            const announcements = response[0];
            console.log(announcements);

            expect(announcements.length).equal(0);
        });

        it("Announcements created should be added", async function () {

            const homeTitle = "TestHouse";

            const createAnnouncement = await provider.functions.createAnnouncement(1000, homeTitle, "20 rue de Test", 100, "This is a Test House");

            const response = await provider.functions.getAnnouncements.call();
            console.log(response);
            const announcements = response[0];
            console.log(announcements);

            expect(announcements[0].title).equal(homeTitle);
        });


        it("Announcements should be deleted", async function () {

            const homeTitle = "TestHouse";

            
            provider.functions.deleteAnnouncement(0);
            const response = await provider.functions.getAnnouncements.call();
            console.log(response);
            const announcements = response[0];
            console.log(announcements);

            expect(announcements.length).equal(0);
        });

    });
});

