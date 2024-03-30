
## Run-book
1. Contract dependens install, compile and deploy
```
just install
npx hardhat compile
just deploy optimism base
```
2. Copy the result of contract deployed(port address) or go to /config/config.json copy sendUniversalPacket.optimism.portAddr and sendUniversalPacket.base.portAddr
3. Go to /ibc-token-bridge/src/App.vue replace `OP_PORT_ADDRESS` and `BASE_PORT_ADDRESS` with port address from step 2
4. Go to /artifacts/contracts/PolymerBridge.sol/PolymerBridge.json file to copy ABI
5. Go to /ibc-token-bridge/src/abi.js replace `CONTRACT_ABI` with ABI from setp 4
6. clone frontend project
```
npm i
npm run serve
```

### Mnemonic: 
    innocent merit harbor rifle autumn cart corn wonder voice forward plastic embody

## Tx hash
Optimism tx hash:             0xc6c487902b7823d7f5ca3091c989b81bcccfcb4d3766825bcd7e84ab75eb2ea8
Base tx hash: 0xdd978624d563d32b9a009e6d0de124c90ed3f466970568399d2b68f812269eeb


## portAddr
Op: 0xB49a654EcED1CF6FabE4C347faD2089490889fCE
Base: 0xB49a654EcED1CF6FabE4C347faD2089490889fCE




