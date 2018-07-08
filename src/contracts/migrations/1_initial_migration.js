var DexETH = artifacts.require("./TrustyPoll.sol");

module.exports = function(deployer) {
  deployer.deploy(DexETH, "0x9ed8edC3633660cD188469175334bDA6C782252B", "0x9ed8edC3633660cD188469175334bDA6C782252B", 0);
};
