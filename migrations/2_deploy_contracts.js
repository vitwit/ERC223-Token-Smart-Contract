const configs = require('../configs/config')
var Contract = artifacts.require(configs.contract.name);

module.exports = function(deployer) {
  deployer.deploy(
    Contract,
    configs.contract.argument.tokenName,
    configs.contract.argument.tokenSymbol,
    configs.contract.argument.decimal, 
    configs.contract.argument.totalSupply,
    );
};