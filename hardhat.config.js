require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  const provider = hre.ethers.provider;

  for (const account of accounts) {
    console.log(
      "%s (%i ETH)", //regex to add ETH on end of balance
      account.address,
      hre.ethers.formatEther(
        // getBalance returns wei amount, format to ETH amount
        await provider.getBalance(account.address)
      )
    );
  }
});

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {}
  }
};
