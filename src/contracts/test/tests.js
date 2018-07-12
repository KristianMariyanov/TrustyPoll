let TrustyPoll = artifacts.require("TrustyPoll");

let isRevert = function(ex){
    return ex && /revert/.test(ex.message);
}

contract("TrustyPoll", accounts => {    
    let emptyAddress = '0x0000000000000000000000000000000000000000';
    let trustyPoll;

    beforeEach(async () => {
        trustyPoll = await TrustyPoll.new(accounts[0], accounts[0], emptyAddress, 0);
    });

    // TODO: approve
    // it("should not throw when creating poll", async () => {
    //     try {
    //         await trustyPoll.createPoll('poll title', {from: accounts[0]});
    //         assert.ok(true);
    //     } catch(ex) {
    //         assert.fail("did throw");
    //     }
    // });
});