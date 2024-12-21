const MongoClient = require('mongodb').MongoClient;

const state = {
    db: null
};
//mongodb+srv://Jobin:<db_password>@cluster0.efxy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//bIOq7XvrlmdTyR3G

module.exports.connect = async function (done) {
    const url = 'mongodb+srv://Jobin:bIOq7XvrlmdTyR3G@cluster0.efxy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    const dbName = 'shopping';

    try {
        const client = await MongoClient.connect(url,{ useUnifiedTopology: true });
        state.db = client.db(dbName);
        done();
    } catch (err) {
        done(err);
    }
};


