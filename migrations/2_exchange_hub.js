const ExchangeHub = artifacts.require("ExchangeHub");

module.exports = function (deployer) {
  deployer.deploy(ExchangeHub);
};
