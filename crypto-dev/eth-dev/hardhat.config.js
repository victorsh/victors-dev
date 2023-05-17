/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: '',
      accounts: []
    },
    polygon: {
      url: '',
      accounts: []
    }
  },
  paths: {
    sources: "./eth/contracts",
    test: "./eth/tests",
    cache: "./eth/cache",
    artifacts: "./eth/artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
