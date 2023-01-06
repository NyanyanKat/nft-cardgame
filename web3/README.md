##How to install nft-cardgame
npx hardhat - select typescript
npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
npm install @openzeppelin/contracts dotenv @nomiclabs/hardhat-ethers

Install "Core" wallet extension
Go to https://faucet.avax.network/

To get private-key:
https://wallet.avax.network/
use recovery phrase to access wallet
change to Fuji network
Choose manage keys - click c-chain private key

CORE- avalenche alternative to metamask dApps

compile contract with npx hardhat compile

deploy contract with npx hardhat run scripts/deploy.ts --network fuji
{ AVAXGods: ... } ---> copy the contract address and add to .env
