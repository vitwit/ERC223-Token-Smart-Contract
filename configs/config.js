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
    privateKey : "8361AAA19234680CB896B6B075926D5398050BA038BFB8C2502B95F0DAFD2512",
  },
  infuraKey: '',
  rpcNetwork : {
    mainnet : 'https://mainnet.infura.io/',
    rinkeby : 'https://rinkeby.infura.io/',
    ropsten : 'https://ropsten.infura.io/'
  }
}
