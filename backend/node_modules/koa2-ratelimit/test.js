const mongoose = require('mongoose');
const MongodbStore = require('./src/MongodbStore');


async function test() {
    await mongoose.connect('mongodb://localhost:27017/koa2-ratelimit');
    const store = new MongodbStore(mongoose.connection, {
        collectionName: 'ratelimits', // table to manage the middleware
        collectionAbuseName: 'ratelimitsabuses', // table to store the history of abuses in.
    });

    await store.Ratelimits.deleteMany({ });
    const data = await Promise.all([
        await store.incr('test', { interval: 1000 }, 1),
        await store.incr('test', { interval: 1000 }, 1),
        await store.incr('test', { interval: 1000 }, 1),
        await store.incr('test', { interval: 1000 }, 1),
        await store.incr('test', { interval: 1000 }, 1),
        await store.incr('test', { interval: 1000 }, 1),
    ]);

    console.log(data);
}

test();
