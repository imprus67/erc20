const path = require("path");
<<<<<<< HEAD
const HDWalletProvider = require("truffle-hdwallet-provider");
=======
>>>>>>> 3c53c86585b27eac1902d22c71a1f9db9fea6ada

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  compilers: {
    solc: {
      version: '0.8.3'
    }
<<<<<<< HEAD
  },
  networks: {
    ropsten:{
      host: "localhost",
      provider: function() {
        //Just for testing not hide my mnemonic and infura address
      return new HDWalletProvider( 'half smoke beauty laptop amused tuna distance fantasy hospital pill unfold engage', "https://ropsten.infura.io/v3/eae1a748f0444c14a76e867158319dae");
      },
      network_id:3,
      gas : 6700000,
      gasPrice : 10000000000
  }
  },

=======
  }
>>>>>>> 3c53c86585b27eac1902d22c71a1f9db9fea6ada
};
