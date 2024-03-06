const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

function generateMnemonic()
{   
    try {
        return bip39.generateMnemonic();
    } catch (error) {
        console.error('Erro ao gerar mnemônico:', error);
        throw error;
    }
}

function mnemonicToSeed(mnemonic)
{   
    try {
        return bip39.mnemonicToSeedSync(mnemonic); 
    } catch (error) {
        console.error('Erro ao gerar seed:', error);
        throw error;
    }
}

function createHDWallet(network, mnemonic, derivationPath)
{
    const seed = mnemonicToSeed(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const account = root.derivePath(derivationPath);
    const node = account.derive(0).derive(0);

    return {
        address: bitcoin.payments.p2pkh({
            pubkey: node.publicKey,
            network: network,
        }).address,
        privateKey: node.toWIF(),
        seed: mnemonic,
    };
}

const network = bitcoin.networks.testnet;
const derivationPath = `m/49'/1'/0'/0`;
const mnemonic = generateMnemonic();
const wallet = createHDWallet(network, mnemonic, derivationPath);

console.log(
    `\nWallet Created\n
    Address: ${wallet.address}\n
    Private Key: ${wallet.privateKey}\n
    Seed: ${wallet.seed}\n`);
