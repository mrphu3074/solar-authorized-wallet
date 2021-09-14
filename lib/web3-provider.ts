const {
  RPCSubprovider,
  Web3ProviderEngine,
  PrivateKeyWalletSubprovider,
} = require("@0x/subproviders");

const CHAIN_ID = 56;
const RPC = "https://bsc-dataseed.binance.org/";

export function getWeb3Provider() {
  const providerEngine = new Web3ProviderEngine();
  providerEngine.addProvider(
    new PrivateKeyWalletSubprovider(process.env.WALLET_PRIVATE_KEY, CHAIN_ID)
  );
  providerEngine.addProvider(new RPCSubprovider(RPC));
  return providerEngine
}