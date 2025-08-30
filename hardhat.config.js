require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",  // 您的主合约版本
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.25",  // 用于 FHE 依赖的版本
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.24",  // 用于 OpenZeppelin 依赖的版本
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 9000,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      chainId: 9000,
      allowUnlimitedContractSize: true,
    }
  }
};