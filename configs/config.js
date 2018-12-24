module.exports = {
  contract : {
    name : 'ERC223Token',
    argument : {
      totalSupply: "100000",
      tokenName: "TST223",
      tokenSymbol: "TST223",
      decimal: "8"
    }
  },
  wallet : {
    privateKey : "",
  },
  infuraKey: '',
  rpcNetwork : {
    mainnet : 'https://mainnet.infura.io/',
    rinkeby : 'https://rinkeby.infura.io/',
    ropsten : 'https://ropsten.infura.io/'
  }
}
