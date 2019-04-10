const {GENESIS_DATA} = require('./config');
const cryptoHash = require('./crypto-hash');

class Block{
    constructor({ timestamp, hash, lastHash, data }){
         this.timestamp = timestamp;
         this.hash = hash;
         this.lastHash = lastHash;
         this.data = data;
    }

    static genesis(){
        return new this(GENESIS_DATA);
    }

    static minedBlock({ lastBlock, data }){

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;

        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp, lastHash, data)
        }

        );
    }
        

}

module.exports = Block;

/*
const block1 = new Block({
    data: 'foo-data',
    hash: 'foo-hash',
    lastHash: 'foo-lastHash',
    timestamp: '01/01/01',
});
console.log("Block1", block1);
*/

