

## Team Members

- @gaoshangniubi123 - Developer


## Introduction

We aim to create a dapp that can bridge customized tokens between chians, we will deploy a lock and mint bridge that mints wrapped token representations.


## Steps to reproduce
1. Contract dependens install, compile and deploy
```
just install
npx hardhat compile
just deploy optimism base
```
2. Copy the result of contract deployed(port address) or go to /config/config.json copy sendUniversalPacket.optimism.portAddr and sendUniversalPacket.base.portAddr
3. Go to /ibc-token-bridge/src/constant.js replace `op_cross_chain_bridge` and `base_cross_chain_bridge` with port address from step 2
4. Go to /artifacts/contracts/BridgeSDK.sol/BridgeSDK.json file to copy ABI
5. Go to /ibc-token-bridge/src/constant.js replace `cross_chain_bridge_abi` with ABI from setp 4
6. clone frontend project
```
npm i
npm run serve
```

## Proof of testnet interaction

After following the steps above you should have interacted with the testnet. You can check this at the [IBC Explorer](https://explorer.ethdenver.testnet.polymer.zone/).

Here's the data of our application:

- Contract (OP Sepolia) : 0xac3d517d5ed9f0715eA067aA0b437A0aF5E28697
- Contract (Base Sepolia): 0xac3d517d5ed9f0715eA067aA0b437A0aF5E28697
- Channel (OP Sepolia): 0xac3d517d5ed9f0715eA067aA0b437A0aF5E28697
- Channel (Base Sepolia): 0xac3d517d5ed9f0715eA067aA0b437A0aF5E28697

- Proof of Testnet interaction:
    - [SendTx](https://optimism-sepolia.blockscout.com/tx/0x9effaf67d7f35cbad354c5ce0f25ade9941615914662d055fee65a88bdba0df8)

## What we learned
Create an application with polymer

## Future Improvements

Create links between more chains


## License
Apache 2.0