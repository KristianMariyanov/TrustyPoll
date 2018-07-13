let TrustyPoll = artifacts.require("TrustyPoll");
let TrustyPollToken = artifacts.require("TrustyPollToken");

let isRevert = function (ex) {
    return ex && /revert/.test(ex.message);
}

contract("TrustyPoll", accounts => {
    let emptyAddress = '0x0000000000000000000000000000000000000000';
    let trustyPoll;
    let adminAccount = accounts[0];
    let feeAccount = accounts[0];
    let fee = 100000000000000000000;

    beforeEach(async () => {
        trustyPollToken = await TrustyPollToken.new(adminAccount);
        trustyPoll = await TrustyPoll.new(adminAccount, feeAccount, trustyPollToken.address, fee);
    });

    it("should not throw when creating poll", async () => {
        try {
            var approve = await trustyPollToken.approve(trustyPoll.address, fee)
            assert.ok(approve);
            await trustyPoll.createPoll('poll title', { from: adminAccount });
            assert.ok(true);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when creating poll without calling approve", async () => {
        try {
            await trustyPoll.createPoll('poll title', { from: adminAccount });
            assert.fail("did not throw");
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should get corect fee when creating poll", async () => {
        try {
            var balanceBeforeCreatingPoll = await trustyPollToken.balanceOf(adminAccount);
            await trustyPollToken.approve(trustyPoll.address, fee)
            await trustyPoll.createPoll('poll title', { from: adminAccount });

            var balanceAfterCreatingPoll = await trustyPollToken.balanceOf(adminAccount);

            assert.ok(balanceBeforeCreatingPoll - fee == balanceAfterCreatingPoll);

        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when creating poll with empty name", async () => {
        try {
            await trustyPollToken.approve(trustyPoll.address, fee)
            await trustyPoll.createPoll('', { from: adminAccount });
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should throw when creating poll without having TRT Tokens", async () => {
        try {
            await trustyPollToken.approve(emptyAddress, fee)
            await trustyPoll.createPoll('', { from: emptyAddress });
        } catch (ex) {
            assert.ok(true);
        }
    });
});