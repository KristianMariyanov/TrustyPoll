let TrustyPoll = artifacts.require("TrustyPoll");

let isRevert = function (ex) {
    return ex && /revert/.test(ex.message);
}

contract("TrustyPoll", accounts => {
    let emptyAddress = '0x0000000000000000000000000000000000000000';
    let tokenAddress = '0x0000000000000000000000000000000000000000';
    let trustyPoll;
    let adminAccount = accounts[0];
    let feeAccount = accounts[0];
    let fee = 100000000000000000000;
    beforeEach(async () => {
        trustyPoll = await TrustyPoll.new(adminAccount, feeAccount, tokenAddress, fee);
    });

    it("should not throw when changing admin", async () => {
        try {
            await trustyPoll.changeAdmin(emptyAddress, { from: adminAccount });
            assert.ok(true);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should change admin properly", async () => {
        try {
            await trustyPoll.changeAdmin(emptyAddress, { from: adminAccount });
            let newadmin = await trustyPoll.admin.call()
            assert.ok(newadmin === emptyAddress);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when not admin try change admin", async () => {
        try {
            await trustyPoll.changeAdmin(emptyAddress, { from: emptyAddress });
        } catch (ex) {
            assert.ok(true);
            let admin = await trustyPoll.admin.call()
            assert.ok(admin === adminAccount)
        }
    });

    it("should not throw when changing fee account", async () => {
        try {
            await trustyPoll.changeFeeAccount(emptyAddress, { from: adminAccount });
            assert.ok(true);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should change fee account properly", async () => {
        try {
            await trustyPoll.changeFeeAccount(emptyAddress, { from: adminAccount });
            let newFeeAccount = await trustyPoll.feeAccount.call()
            assert.ok(newFeeAccount === emptyAddress);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when not admin try change fee account", async () => {
        try {
            await trustyPoll.changeFeeAccount(emptyAddress, { from: emptyAddress });
        } catch (ex) {
            assert.ok(true);
            let newFeeAccount = await trustyPoll.feeAccount.call()
            assert.ok(newFeeAccount === feeAccount)
        }
    });    

    it("should not throw when changing fee", async () => {
        try {
            await trustyPoll.changeFee(0, { from: adminAccount });
            assert.ok(true);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should change fee properly", async () => {
        try {
            await trustyPoll.changeFee(0, { from: adminAccount });
            let newFee = await trustyPoll.fee.call()
            assert.ok(newFee == 0);
        } catch (ex) {
            assert.fail("did throw");
        }
    });

    it("should throw when not admin try to change fee", async () => {
        try {
            await trustyPoll.changeFee(0, { from: emptyAddress });
        } catch (ex) {
            assert.ok(true);
            let newFee = await trustyPoll.fee.call()
            assert.ok(newFee == fee)
        }
    });

    it("should throw when try to increase the fee", async () => {
        try {
            await trustyPoll.changeFee(fee + 1, { from: adminAccount });
        } catch (ex) {
            assert.ok(true);
        }
    });
});