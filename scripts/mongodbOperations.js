import { MongoClient } from 'mongodb';

//connecting to cluster/db/collections
export async function connectToCluster(uri) {
        let mongoClient;
     
        try {
            mongoClient = new MongoClient(uri);
            console.log('Connecting to MongoDB Atlas cluster...');
            await mongoClient.connect();
            console.log('Successfully connected to MongoDB Atlas!');
     
            return mongoClient;
        } catch (error) {
            console.error('Connection to MongoDB Atlas failed!', error);
            process.exit();
        }
     }



//enable CRUD operations
export async function executeStockCrudOperations() {
        const uri = process.env.DB_URI;
        let mongoClient;

        try {
            mongoClient = await connectToCluster(uri);
            const db = mongoClient.db('Products');
            const collection = db.collection('Fast-Food-Products')

            console.log("Stocks")

            // console.log(await importStockfromMongodb(collection))
            return await importStockfromMongodb(collection)
            
        } finally {
            await mongoClient.close();
        }
}


export const createStock = async (collection) => {
    // await collection.insert
} 

export const importStockfromMongodb = async (collection) => {
    const Stocks = await collection.find().toArray();
    return Stocks;
}





