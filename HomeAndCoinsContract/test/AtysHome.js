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
        provider2 = await hardhatAtysHome.connect(addresse1);
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

            const potentialBuyerAdress = await provider.functions.announcementToOwner(0);
            console.log(potentialBuyerAdress);

            expect(announcements[0].title).equal(homeTitle);
        });

        it("user should be buy an announcement", async function () {
            const homeTitle = "TestHouse";
            const createAnnouncement = await provider.functions.createAnnouncement(1000, homeTitle, "20 rue de Test", 100, "This is a Test House");
            provider2.functions.buyAnnouncement(0, 1001);
            const potentialBuyerAdress = await provider.functions.announcementToOwner(0);
            
            expect(potentialBuyerAdress[0]).equal(ownerAdress.address);
        });


        it("Announcements should be deleted", async function () {
            provider.functions.deleteAnnouncement(0);
            const response = await provider.functions.getAnnouncements.call();
            console.log(response);
            const announcements = response[0];
            console.log(announcements);

            expect(announcements.length).equal(0);
        });

        

    });
});

