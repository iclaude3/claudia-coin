import { SHA256 } from "crypto-js";

export class CryptoBlock {
    index: number;
    timestamp: string;
    data: any;
    precedingHash: string;
    hash: string;

    constructor(index: number, timestamp: string, data: any, precedingHash: string) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }

    computeHash = () => {
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString()
    }
}
