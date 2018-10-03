const MagicSquare = artifacts.require("MagicSquare");

module.exports = async function(callback) {
  // perform actions
  const accounts = await web3.eth.getAccounts();

  const instance = await MagicSquare.deployed();

  await instance.generateMagicSquare(4, { from: accounts[0] });

  callback();
}