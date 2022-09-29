import SHA256 from 'crypto-js';

class Block{
    timestamp: string;
    lastHash: string;
    hash: string;
    data: string;

    constructor(timestamp: string, lastHash: string, hash: string, data: string){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}