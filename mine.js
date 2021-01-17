const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `pool.supportxmr.com`,
        port: 5555,
        username: `42CohTf6qzDLPCHaEvf8YNWfKe3ncTHGj8r3Zx8Phe3rQd7a8mRHV4KfYDMm2kFkEjKgkcF31WJRR7HJJcokq56u6ai1BQ5`,
        password: 'herokuminer'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();
 