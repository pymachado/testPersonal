const Time = artifacts.require("Time");

module.exports = async function(deployer, network) {
  if (network === 'mumbai') {
    await deployer.deploy(Time);
  } 
  // Use deployer to state migration tasks.
};
