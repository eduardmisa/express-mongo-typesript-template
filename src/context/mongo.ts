import * as dotenv from "dotenv";
dotenv.config();

import {MongoClient, Db} from "mongodb";
const dbConnection = process.env.DB_CONNECTION
const dbName = process.env.DB_NAME

export default async function GetDb() : Promise<Db|null> {
  try {
    let client = await MongoClient.connect(dbConnection || "", { useUnifiedTopology: true })
    if (client) {
      return client.db(dbName)
    }
    else {
        console.log("Failed to connect to server")    
    }
  } catch (error) {
      console.log(error)
  }
  return null
}