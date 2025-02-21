import  { MongoClient }  from 'mongodb';

async function ConnMongoDB() {
  const myURI = "mongodb://localhost:27017/";
  const client = new MongoClient(myURI);
  await client.connect();

  return client;
}

export async function createToDo() {
  let Conn = await ConnMongoDB();

  const moldeToDo = {
    title : 'Batata',
    status : false,
    userKey : 'h55'
  }

  const result = await Conn.db("dataStore")
    .collection("toDoStore")
    .insertOne(moldeToDo);
}