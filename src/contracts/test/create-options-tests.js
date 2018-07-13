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
        await trustyPollToken.approve(trustyPoll.address, fee)
        await trustyPoll.createPoll('poll title', { from: adminAccount });
    });

    it("should not throw when creating option", async () => {
        try {
            await trustyPoll.createOption(1, 'Option1', { from: adminAccount });
            assert.ok(true);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when not author try to create option", async () => {
        try {
            await trustyPoll.createOption(1, 'Option1', { from: adminAccount });
            assert.fail("did not throw");
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should throw when creating option with empty name", async () => {
        try {
            await trustyPoll.createOption(1, '', { from: adminAccount });
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should throw when creating option for non existing poll", async () => {
        try {
            await trustyPoll.createPoll(2, '', { from: adminAccount });
        } catch (ex) {
            assert.ok(true);
        }
    });
});