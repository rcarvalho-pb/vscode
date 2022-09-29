const SHA256 = require('crypto-js/SHA256')

class Block{
    timestamp: number | string;
    lastHash: string;
    hash: string;
    data: object;

    constructor(timestamp: number | string, lastHash: string, hash: string, data: object){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(): string{
        return `Block: \nTimestamp: ${this.timestamp} \nLas Hash: ${this.lastHash.substring(0, 10)} \nHash: ${this.hash.substring(0, 10)} \nData: ${this.data}`;
    }

    static genesis(): Block{
        return new this('Genesis time', '--------', 'JFGFff3439', []);
    }

    static mineBlock(lastBlock: Block, data: object): Block{
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp: number | string, lastHash: string, data: object): string{
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block: Block): string{
        const {timestamp, lastHash, data} = block;

        return Block.hash(timestamp, lastHash, data);
    }
}

export default Block;