import {ZDataLayer} from "./z.datalayer"
import {User} from "../models/user.model"
import {ObjectID} from "mongodb"

export class UserDatalayer extends ZDataLayer<User> {
  constructor() {
    super("user") // Collection name
  }
}