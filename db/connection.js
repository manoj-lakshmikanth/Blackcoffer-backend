const { MongoClient } = require('mongodb');
const con = new MongoClient(
  'mongodb+srv://root:root@cluster0.dzjjnon.mongodb.net/?retryWrites=true&w=majority'
);

const connection = async () => {
  try {
    console.log('db is connected');
    const backendConnect = await con.connect();
    const dbConnect = await backendConnect.db('energy');
    const table = await dbConnect.collection('data');
    console.log('db is connected');
    return table;
  } catch (error) {
    console.log('Error while connecting database', error);
  }
};
module.exports = connection;
