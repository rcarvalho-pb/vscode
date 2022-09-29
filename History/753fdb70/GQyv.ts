import SHA256 from 'crypto-js';

class Block{
    timestamp: string;
    lastHash: string;
    hash: string;
    data: object;

    constructor(timestamp: string, lastHash: string, hash: string, data: object){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(): string{
        return `Block: \nTimestamp: ${this.timestamp} \nLas Hash: ${this.lastHash.substring(0, 10)} \nHash: ${this.hash.substring(0, 10)} \nData: ${this.data}`;
    }

    static genesis(): Block{
        return new this('Genesis time', '--------', 'JFGFff3439', [])
    }
}