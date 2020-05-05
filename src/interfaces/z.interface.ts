import { ObjectID } from "mongodb";

export interface ZInterface<T> {
    list(): Promise<T[] | undefined>
    get(id: ObjectID): Promise<T | undefined>
    add(record: T): Promise<T | undefined>
    edit(id: ObjectID, record: T): Promise<T | undefined>
    delete(id: ObjectID): Promise<T | undefined>
  }