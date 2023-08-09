/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Polygon } from "@thirdweb-dev/chains";
export const NETWORK = Polygon;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x88B429Ff63aF913bbEf13a83441aF93Cde510761";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x3913Bd4d33EdD84192B8086f295e7Cb45f83d093";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use polygonscan.com to view transactions on the Polygon Mainnet.
export const ETHERSCAN_URL = "https://polygonscan.com";
