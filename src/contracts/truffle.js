var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = '---'

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },  
		ropsten: {
			provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/MPry1enKxV4zfRdLnhH5"),
			network_id: 3,
			gas: 1755253
		}
    },
	rpc: {
		host: "localhost",
		gas: 970388,
		port: 8545
	},
	solc: {
		version: "0.4.23",
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
};