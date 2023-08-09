/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Polygon } from "@thirdweb-dev/chains";
export const NETWORK = Polygon;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x88B429Ff63aF913bbEf13a83441aF93Cde510761";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = [
  "0x58a127F40b76D864B3154dFFC3cee3761FFa1729",
  "0x1c9Fa0976A21B9b139640DE7b6360dfE5080aB62",
  "0xa53e75922522E47FC465Ac4944691976E974376A",
  "0x3eB42feb78DB9f4bCf4bB10241cc03BCa95e79e3",
  "0x087539F517f622F3626a17b56a1E08bc201eed34",
  "0x6573CDBeD7ef027cDf26bE7495Db9e11c810D90e",
  "0xd64a8aE73FEd10F47BD2070Ced225731A894a06A",
];

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use polygonscan.com to view transactions on the Polygon Mainnet.
export const ETHERSCAN_URL = "https://polygonscan.com";
