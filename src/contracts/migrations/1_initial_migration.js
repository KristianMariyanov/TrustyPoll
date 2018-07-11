var TrustyPoll = artifacts.require("./TrustyPoll.sol");
var TrustyPollToken = artifacts.require("./TrustyPollToken.sol");

module.exports = function(deployer) {	
  // deployer.deploy(TrustyPollToken);
  deployer.deploy(TrustyPoll, "0x9ed8edC3633660cD188469175334bDA6C782252B", "0x9ed8edC3633660cD188469175334bDA6C782252B", "0xb5e15631d41b5b32b0d792cba83e83e63d530e4c",  100000000000000000000);
};
