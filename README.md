
## Run-book
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

### Mnemonic: 
    help weasel bottom word speak town duck uniform enroll rocket smile top

## Tx hash
Optimism tx hash: 0x9effaf67d7f35cbad354c5ce0f25ade9941615914662d055fee65a88bdba0df8
Base tx hash: 0x9effaf67d7f35cbad354c5ce0f25ade9941615914662d055fee65a88bdba0df8


## portAddr
Op: 0xac3d517d5ed9f0715eA067aA0b437A0aF5E28697
Base: 0xac3d517d5ed9f0715eA067aA0b437A0aF5E28697




