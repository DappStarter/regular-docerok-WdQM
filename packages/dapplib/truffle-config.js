require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth museum unaware grace nature suspect gift'; 
let testAccounts = [
"0x5c61f838b144cff44000398c54a7184f100df1e90109a960b9d64002cadb6f6e",
"0xcd2623c4f57368d008778e7d1f4d7dc07997baabe6bdef35f2c865ecaf5e59aa",
"0x90121bca2790d8844a34c788f31927659cb260efdfb6db0f80e6f999e76777aa",
"0xcbc4a731fa6428d70fa797a1b5da1c35e0f96e78bc091c7789cc6658e70be315",
"0x856c1c4c2dc56574377d9cd537f12987da2d90e7041015060a822b36e6a78381",
"0xfc4e6a93fadda5bd7e90477c6e64b690343c824e4a2997c22dc30ac9f8a3b645",
"0xb332bd2cc0a2a181b2c8c9ae817561dfb4fe272911ea7e12d1e88ebedaa90355",
"0xe5e8348d13b8ebc6c13bcf8a1f54940d049c5e3fefb0700753fda04b46d2f3f3",
"0x271c746677f652bfd312e66052396f93866c13e137520afaec0ea8eabc615f0d",
"0x9fd7fd1d0a42acce40002e4fd6418eba53946afdd2ecdcaf5deaf2ea7c942c73"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

