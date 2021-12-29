let mongodb = require('mongodb');
class Config {

    static async initMongo() {
        const mongoUsername = process.env.DAYAN_MONGO_USERNAME
        const mongoPassword = process.env.DAYAN_MONGO_PASSWORD
        Config.mongoConfig = {
            server: process.env.DAYAN_MONGO_SERVER,
            port: process.env.DAYAN_MONGO_PORT ,
        };
        Config.databaseName = process.env.DAYAN_MONGO_DATABASE;
        const mongoUrl = `mongodb://${mongoUsername}:${mongoPassword}@${Config.mongoConfig.server}:${Config.mongoConfig.port}`

        let mongoDBConnection = await mongodb.MongoClient.connect(
            mongoUrl,
            {useNewUrlParser: true}
        );
        Config.mongoDBConnection = mongoDBConnection;
        Config.mongoDB = Config.mongoDBConnection.db(Config.databaseName);
    }

    static async Initialize() {
        await Config.initMongo();
    }
}

module.exports = Config;


