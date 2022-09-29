import SHA256 from 'crypto-js';

class Block{
    timestamp: string;
    lastHash: string;
    
    constructor(timestamp: string, lasthash: string, hash: string, data: string){
        this.timestamp = timestamp;

    }
}