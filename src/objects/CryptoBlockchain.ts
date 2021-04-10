import { CryptoBlock } from "./CryptoBlock";

export class CryptoBlockchain {
    blockchain: CryptoBlock[];
    blockchainLength: number;

    constructor() {
        this.blockchain = [this.startGenesisBlock()];
        this.blockchainLength = 1;
    }

    startGenesisBlock = (): CryptoBlock => {
        const date = new Date();  
        return new CryptoBlock(0, date.toDateString(), "Head", "0");
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchainLength - 1];
    }

    addNewBlock(newBlock: CryptoBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
}