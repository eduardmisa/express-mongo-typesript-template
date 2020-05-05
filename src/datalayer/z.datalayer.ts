import {ZInterface} from "../interfaces/z.interface"
import {Db, ObjectID} from "mongodb"
import GetDB from "../context/mongo"

export class ZDataLayer<T> implements ZInterface<T> {
  collectionName: string = ""

  constructor(collectionName: string) {
    this.collectionName = collectionName
  }

  async list(): Promise<T[] | undefined> {
    var database : Db | null = await GetDB()
    return await database?.collection(this.collectionName).find().toArray() as T[]
  }

  async get(id: ObjectID): Promise<T | undefined> {
    var database : Db | null = await GetDB()
    return await database?.collection(this.collectionName).findOne(id) as T
  }

  async add(record: T): Promise<T | undefined> {
    var database : Db | null = await GetDB()
    let result = await database?.collection(this.collectionName).insertOne(record)
    if (result)
      return result.ops[0] as T
    return undefined
  }

  // Remove "_id" in record
  // try { delete record._id } catch {}
  async edit(id: ObjectID, record: T): Promise<T | undefined> {
    var database : Db | null = await GetDB()
    let result = await database?.collection(this.collectionName).findOneAndUpdate(
      {_id: id},
      { $set: record })

    if (result)
      return Object.assign(result.value, record) as T
    return undefined
  }

  async delete(id: ObjectID): Promise<T | undefined> {
    var database : Db | null = await GetDB()
    let result = await database?.collection(this.collectionName).findOneAndDelete({_id: id})
    if (result)
      return result.value as T
    return undefined
  }
}
