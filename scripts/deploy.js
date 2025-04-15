const hre = require("hardhat");

const tokens = (_number) => {
  return ethers.utils.parseUnits(_number.toString(), "ether");
};

async function main() {
  //ERC20Generator
  const _tokenName = "DAULAT HUSSAIN";
  const _tokenSymbol = "DH";
  const _initialSupply = tokens(1000000000);
  const ERC20Generator = await hre.ethers.getContractFactory("ERC20Generator");
  const erc20Generator = await ERC20Generator.deploy(
    _initialSupply,
    _tokenName,
    _tokenSymbol
  );
  await erc20Generator.deployed();
  console.log(` erc20Generator: ${erc20Generator.address}`);

  //LookUpContract
  const LookUpContract = await hre.ethers.getContractFactory("LookUpContract");
  const lookUpContract = await LookUpContract.deploy();

  await lookUpContract.deployed();
  console.log(` LookUpContract: ${lookUpContract.address}`);
}

//npx hardhat run scripts/deploy.js --network holesky
//npx hardhat run scripts/deploy.js --network localhost

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
