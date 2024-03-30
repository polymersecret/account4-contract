### Assets: 
```
innocent merit harbor rifle autumn cart corn wonder voice forward plastic embody
```
## Run-book
1. Contract install, compile, deploy
```
just install
npx hardhat compile
just deploy optimism base
```
2. Copy the result of contract deployed(port address) or go to /config/config.json copy sendUniversalPacket.optimism.portAddr and sendUniversalPacket.base.portAddr
3. Go to /ibc-token-bridge/src/App.vue replace `OP_PORT_ADDRESS` and `BASE_PORT_ADDRESS` with port address from step 2
4. Go to /artifacts/contracts/PolymerBridge.sol/PolymerBridge.json file to copy ABI
5. Go to /ibc-token-bridge/src/abi.js replace `CONTRACT_ABI` with ABI from setp 4
6. Frontend install, start
```
cd ibc-token-bridge
npm i
npm run serve
```

## Tx hash
Optimism tx hash: 0x27a859bc3038ee5bbe90c71c39007005732ca33a355181cd3bef3ac779e3f736
Base tx hash: 0xe206968e327389e3c1cf18e6dcf1b6503b97f72fee31a6ab15f7b41ce5881d5c


## PortAddress
Op: 0xc958C5Ed8f1deAc4B1763889a45a6a24d9EF3871
Base: 0xc958C5Ed8f1deAc4B1763889a45a6a24d9EF3871




