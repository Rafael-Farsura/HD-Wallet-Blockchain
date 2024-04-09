# createWallet.js

This Node.js script allows you to create an HD (Hierarchical Deterministic) wallet for the Bitcoin testnet/mainnet using libraries such as bip32, bip39, and bitcoinjs-lib.

## Prerequisites

- Installed Node.js
- Internet access to install dependencies

## Installation

1. Clone this repository:

git clone https://github.com/Rafael-Farsura/HD-Wallet-Blockchain.git
 
2. Navigate to the repository directory:

cd your-repository

4. InstalL dependencies:

npm install

## Usage

To generate a new HD wallet, run the `createWallet.js` script using Node.js. This will create a wallet with an address, a private key, and a seed (mnemonic).

node createWallet.js


After running the script, the address, private key, and seed of the generated wallet will be displayed.

## Attention

- Keep the seed (mnemonic) safe. It is the only way to recover the wallet in the future.
- The private key is sensitive and should be handled with care. Do not share it with anyone and keep it in a secure location.

## Contribution

Contributions are welcome! If you find any issues or have any suggestions for improvement, feel free to open an issue or submit a pull request.
