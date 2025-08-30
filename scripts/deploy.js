const { ethers } = require("hardhat");

async function main() {
  console.log("开始部署合约...");
  
  // 获取部署者
  const [deployer] = await ethers.getSigners();
  console.log("部署者地址:", deployer.address);
  
  try {
    // 部署合约
    const FHEVoting = await ethers.getContractFactory("FHEVoting");
    const voting = await FHEVoting.deploy();
    
    // 正确获取合约地址
    const contractAddress = await voting.getAddress();
    console.log("✅ FHEVoting 合约已部署到:", contractAddress);
    
  } catch (error) {
    console.error("❌ 部署失败详情:", error.message);
  }
}

// 执行部署
main();