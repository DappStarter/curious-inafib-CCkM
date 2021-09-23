require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note pizza slow grid enrich metal gasp'; 
let testAccounts = [
"0x796ea6ba1220fe3bd390a8a9f32f80aec71bf6b9c1082fff4a64c75582b787e9",
"0xbb55f22e98bdcd1c760bc2394b2f16b4812212901eb609cd8be240dff325de20",
"0x68ed28adc4729c6e211d92e34aa5f99292eaf022faa4c1ccafa07074edd2555b",
"0x015b74aa6723b7f664178df36bfb64f4b6377a382dca986924d147c9276674f6",
"0xddec51ac3262301aa19f30185e3cb51ebd9748cfd2c76ea3267cc0558a0494d6",
"0xffea9a077462c0f462b9ce75d982dfc95c8a71e7c44e992c74ebb967eb2ad1ae",
"0xdfeeb298d632558af539b9eee8e8d02960de38e9d9adf4daea5e3c49d45f2863",
"0x76b718a67c0817066e6f4d8165b44914c50eefdf21fae9711b6f887fe6329d0c",
"0x1607260e090362dfcdd037fbbdca9873a0c7685f01d9d28182b3f37cb0777c98",
"0x770c3237d40b28390a875f314680977994b33abc78fab310dba622d51ac5fd62"
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

