const { MongoClient } = require('mongodb');

const state = {
    db: null
};

module.exports.connect = async function (done) {
    const url = 'mongodb+srv://Jobin:bIOq7XvrlmdTyR3G@cluster0.efxy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const dbName = 'shopping';

    try {
        // Connect to the MongoDB cluster
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        state.db = client.db(dbName); // Assign the database instance to state
        console.log('Database connected successfully');
        if (done) done(); // Callback after successful connection
    } catch (err) {
        console.error('Database connection error:', err);
        if (done) done(err); // Callback with error
    }
};

module.exports.get = function () {
    if (!state.db) {
        throw new Error('Database not initialized. Call connect() first.');
    }
    return state.db;
};



