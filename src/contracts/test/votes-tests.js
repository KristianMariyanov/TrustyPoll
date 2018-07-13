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
        await trustyPoll.createOption(1, 'Option1', { from: adminAccount });
        await trustyPoll.createOption(1, 'Option2', { from: adminAccount });
    });

    it("should not throw when vote", async () => {
        try {
            await trustyPoll.vote(1, 1, { from: accounts[1] });
            assert.ok(true);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when author try to vote", async () => {
        try {
            await trustyPoll.vote(1, 1, { from: adminAccount });
            assert.fail("did not throw");
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should throw when try to vote for invalid option", async () => {
        try {
            await trustyPoll.vote(1, 0, { from: accounts[1] });
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should throw when try to vote for invalid poll", async () => {
        try {
            await trustyPoll.vote(0, 1, { from: accounts[1] });
        } catch (ex) {
            assert.ok(true);
        }
    });

    it("should not be able to vote more then once", async () => {
        try {
            await trustyPoll.vote(1, 1, { from: accounts[1] });
            await trustyPoll.vote(1, 1, { from: accounts[1] });

            var voteCounts = await trustyPoll.pollVotesCount.call(1, 1);
            assert.ok(voteCounts == 1)
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should be able to change your vote", async () => {
        try {
            await trustyPoll.vote(1, 1, { from: accounts[1] });
            await trustyPoll.vote(1, 2, { from: accounts[1] });

            var firstOptionVotesCounts = await trustyPoll.pollVotesCount.call(1, 1);
            var secondOptionVotesCounts = await trustyPoll.pollVotesCount.call(1, 2);
            assert.ok(firstOptionVotesCounts == 0)
            assert.ok(secondOptionVotesCounts == 1)
        } catch (ex) {
            assert.fail("did throw");
        }
    });
});