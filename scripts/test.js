const Web3 = require('web3').default;
const HDWalletProvider = require('@truffle/hdwallet-provider');
const contractInfro = require('../artifacts/contracts/PolymerBridge.sol/PolymerBridge.json');
const configInfro = require('../config/config.json');

async function main() {
  try {
    const mnemonic = 'host track crumble whisper inherit tank material either offer modify lonely ozone';
    const chain = process.argv[2];
    const amountSmall = process.argv[3];
    let amount = amountSmall * 1000000000000000000
    let url = (chain === 'optimism' ? 'https://sepolia.optimism.io' : 'https://sepolia.base.org')
    const provider = new HDWalletProvider(mnemonic, url);
    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(contractInfro.abi, configInfro.sendUniversalPacket[process.argv[2]].portAddr);
    const channel = web3.utils.padRight(web3.utils.asciiToHex(configInfro.sendUniversalPacket[process.argv[2]].channelId), 64);
    const method = contract.methods.bridgePMT(configInfro.sendUniversalPacket[process.argv[2]].portAddr, channel, amount);
    const account = (await web3.eth.getAccounts())[0];
    const tx = method.send({ from: account });
    tx.on('transactionHash', (hash) => {
      console.log('tx hash:', hash);
    });
  } catch (e) {
    console.error(e)
  }

}
main().catch(error => {
  console.error(error);
  process.exit(1);
});